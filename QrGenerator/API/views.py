from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import QrSerializer
from django.db import connection 
from django.contrib.auth import authenticate, login
from django.db.utils import IntegrityError 
from django.contrib.auth.hashers import check_password,make_password
from .serializer import TokenSerializers
from .serializer import QrUserSerializer
from django.shortcuts import redirect
import os
import random
import uuid
import logging
from PIL import Image
import segno
import requests
from io import BytesIO
from django.conf import settings
from .serializer import UsersSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
logger = logging.getLogger(__name__)
@api_view(['GET', 'POST'])
def GetQr(request):
    if request.method == "POST":
        serializer = QrSerializer(data=request.data)
        if serializer.is_valid():
            try:
                validated_data = serializer.validated_data
                url = validated_data.get("data")
                size = validated_data.get("size")
                config = validated_data.get("config", {})
                logo_url = config.get("logo", "")  
                level = config.get("level", 'L')
                background_color = config.get("bgColor")
                body_color = config.get("bodyColor")
                error_level = level.upper() if level in ['L', 'M', 'Q', 'H'] else 'L'
                qr = segno.make(url, error=error_level)
                qr_png_file = f"QrCode{random.random()}.png"
                qr_png_path = os.path.join(settings.MEDIA_ROOT, "QrGenerator", "QRS", qr_png_file) 
                scale = 100
                qr.save(qr_png_path, kind='png', scale=scale,light=background_color,dark=body_color)
                qr_image = Image.open(qr_png_path).convert("RGBA")
                if logo_url:
                    logo_response = requests.get(logo_url)
                    if logo_response.status_code == 200:
                        logo_image = Image.open(BytesIO(logo_response.content)).convert("RGBA")
                        logo_size = int(qr_image.size[0] * 0.25)
                        logo_image = logo_image.resize((logo_size, logo_size), Image.LANCZOS)
                        qr_width, qr_height = qr_image.size
                        logo_width, logo_height = logo_image.size
                        position = ((qr_width - logo_width) // 2, (qr_height - logo_height) // 2)
                        qr_image.paste(logo_image, position, logo_image)
                        final_qr_file = f"QrCodeWithLogo{random.random()}.png"
                        final_qr_path = os.path.join(settings.MEDIA_ROOT, "QrGenerator", "QRS", final_qr_file)
                        qr_image.save(final_qr_path, dpi=(300, 300))
                        image_url = f"http://127.0.0.1:8000{settings.MEDIA_URL}QrGenerator/QRS/{final_qr_file}"
                    else:
                        return Response({'error': 'Failed to fetch logo image.'}, status=400)
                else:
                    image_url = f"http://127.0.0.1:8000{settings.MEDIA_URL}QrGenerator/QRS/{qr_png_file}"
                return Response({"imageurl": image_url})
            except Exception as e:
                return Response({'error': str(e)}, status=500)
        return Response(serializer.errors, status=400)
    elif request.method == "GET":
        return Response({"message": "GET request received. This endpoint only handles POST requests."}, status=200)
    return Response({'error': 'Method not allowed.'}, status=405)
@api_view(['GET', 'POST'])
def Users(request):
    if request.method == 'POST':
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            try:
                username = serializer.validated_data.get('username')
                password = serializer.validated_data.get('password')
                email = serializer.validated_data.get('email')
                hashed_password = make_password(password)
                with connection.cursor() as cursor:
                    cursor.execute("SELECT id FROM USERS WHERE username = %s OR email = %s", [username, email])
                    existing_user = cursor.fetchone()
                    if existing_user:
                        return Response({"error": "Username or email already exists"}, status=400)
                    token_key = str(uuid.uuid4())
                    cursor.execute("""
                        INSERT INTO USERS (username, password, email, token)
                        VALUES (%s, %s, %s, %s)
                    """, [username, hashed_password, email, token_key])
                    last_insert_id = cursor.lastrowid
                return Response({
                    "message": "User created successfully",
                    "user_id": last_insert_id,
                    "token": token_key
                }, status=201)
            except Exception as e:
                logger.error(f"Error in Users POST: {str(e)}")
                return Response({'error': str(e)}, status=500)
        return Response(serializer.errors, status=400)
    elif request.method == 'GET':
        try:
            with connection.cursor() as cursor:
                cursor.execute("SELECT id, username, email, password, token FROM USERS")
                rows = cursor.fetchall()
                users = [{"id": row[0], "username": row[1], "email": row[2], "password": row[3], "token": row[4]} for row in rows]
            return Response(users)
        except Exception as e:
            logger.error(f"Error in Users GET: {str(e)}")
            return Response({'error': str(e)}, status=500)
    return Response({'error': 'Method not allowed.'}, status=405)
@api_view(['POST'])
def Login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({"error": "Username and password are required."}, status=400)
        try:
            with connection.cursor() as cursor:
                cursor.execute("SELECT password, token FROM USERS WHERE username = %s", [username])
                user = cursor.fetchone()
                if user:
                    hashed_password, token_key = user
                    if check_password(password, hashed_password):
                        return Response({"token": token_key}, status=200)
                    else:
                        return Response({"error": "Invalid password."}, status=400)
                else:
                    return Response({"error": "Username does not exist."}, status=400)
        except Exception as e:
            logger.error(f"Error in Login POST: {str(e)}")
            return Response({'error': str(e)}, status=500)
    return Response({'error': 'Method not allowed.'}, status=405)
@api_view(['POST'])
def GetTokenInfo(request):
    if request.method == 'POST':
        serializer = TokenSerializers(data=request.data)
        if serializer.is_valid():
            try:
                validated_data = serializer.validated_data
                token = validated_data.get("token")
                if not token:
                    return Response({"error": "Token is required"}, status=400)
                with connection.cursor() as cursor:
                    cursor.execute("SELECT id, username, email, password FROM USERS WHERE token=%s", [token])
                    user = cursor.fetchone()
                    if user:
                        user_info = {
                            "id": user[0],
                            "username": user[1],
                            "email": user[2],
                            "password": user[3]
                        }
                        return Response(user_info, status=200)
                    else:
                        return Response({"error": "Invalid token"}, status=400)
            except IntegrityError:
                return Response({"error": "Database error occurred"}, status=500)
            except Exception as e:
                print(f"Error: {e}")
                return Response({'error': str(e)}, status=500)
        return Response(serializer.errors, status=400)
    return Response({'error': 'Method not allowed.'}, status=405)
@api_view(['DELETE'])
def DeleteAccount(request):
    if request.method == "DELETE":
        serializer = TokenSerializers(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            token = validated_data.get("token")
            if not token:
                return Response({"error": "Token is required"}, status=400)
            try:
                with connection.cursor() as cur:
                    cur.execute("SELECT id FROM USERS WHERE token=%s", [token])
                    user = cur.fetchone()
                    if user:
                        cur.execute("DELETE FROM QRS WHERE user_id=%s", [user[0]])  
                        cur.execute("DELETE FROM USERS WHERE token=%s", [token])
                        return Response({"message": "User account has been successfully deleted."}, status=200)
                    else:
                        return Response({"error": "Invalid token or user not found."}, status=404)
            except IntegrityError as e:
                logger.error(f"Database error during account deletion: {str(e)}")
                return Response({"error": f"Database integrity error: {str(e)}"}, status=500)
            except Exception as e:
                logger.error(f"Error in DeleteAccount: {str(e)}")
                return Response({"error": f"Unexpected error: {str(e)}"}, status=500)
        return Response(serializer.errors, status=400)
    return Response({"error": "Method not allowed."}, status=405)
@api_view(['PUT'])
def ChangeInformation(request):
    if request.method == 'PUT':
        serializer = TokenSerializers(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            token = validated_data.get("token")
            if not token:
                return Response({"error": "Token is required"}, status=400)
            try:
                new_username = request.data.get('username')
                new_password = request.data.get('password')
                new_email = request.data.get('email')
                hashed_password = make_password(new_password)
                with connection.cursor() as cur:
                    cur.execute("SELECT id FROM USERS WHERE token=%s", [token])
                    user = cur.fetchone()
                    if user:
                        cur.execute("""
                            UPDATE USERS SET username=%s, email=%s, password=%s WHERE token=%s
                        """, [new_username, new_email, hashed_password, token])
                        return Response({"message": "User information updated successfully."}, status=200)
                    else:
                        return Response({"error": "Invalid token or user not found."}, status=404)
            except IntegrityError as e:
                logger.error(f"Database error during update: {str(e)}")
                return Response({"error": "Database error occurred"}, status=500)
            except Exception as e:
                logger.error(f"Error in ChangeInformation: {str(e)}")
                return Response({"error": "An unexpected error occurred"}, status=500)
        return Response(serializer.errors, status=400)
    return Response({"error": "Method not allowed."}, status=405)
@api_view(['POST', 'GET'])
def AddQr(request):
    base_url = settings.BASE_URL
    if request.method == 'POST':
        serializer = QrUserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user_id = serializer.validated_data.get('user_id')
                qr_code = serializer.validated_data.get('qr_code')
                downloaded_at = serializer.validated_data.get('downloaded_at')
                description = serializer.validated_data.get('description')
                slug = str(uuid.uuid4())
                link = serializer.validated_data.get('link')
                relative_url = qr_code.replace("http://127.0.0.1:8000", "")
                with connection.cursor() as cur:
                    cur.execute("""
                        INSERT INTO QRS (user_id, qr_code, downloaded_at,description,slug,link)
                        VALUES (%s, %s, %s,%s,%s,%s)
                    """, [user_id, relative_url, downloaded_at,description,slug,link])
                qr_url = f"{base_url}/qr/{slug}/"
                return Response({
                    "success": "QR code has been added to the profile",
                    "imageurl": relative_url,
                    "downloaded_at": downloaded_at,
                    "user_id": user_id,
                    "slug": slug,
                }, status=201)
            except Exception as e:
                logger.error(f"Server error: {str(e)}")
                return Response({"error": f"Server error: {str(e)}"}, status=500)
        return Response({"error": "Invalid data", "details": serializer.errors}, status=400)
    elif request.method == 'GET':
        try:
            with connection.cursor() as cur:
                cur.execute("""
                    SELECT id, user_id, qr_code, created_at, updated_at, downloaded_at,description,slug,link
                    FROM QRS
                """)
                QRS = cur.fetchall()
            MYQRS = [
                {
                    "id": QR[0],
                    "user_id": QR[1],
                    "qr_code": QR[2],
                    "created_at": QR[3],
                    "updated_at": QR[4],
                    "downloaded_at": QR[5],
                    "description": QR[6],
                    "slug": QR[7],
                    "link": QR[8]
                }
                for QR in QRS
            ]
            return Response(MYQRS, status=200)
        except Exception as e:
            logger.error(f"Server error: {str(e)}")
            return Response({"error": f"Server error: {str(e)}"}, status=500)
@api_view(['POST'])
def SelestQr(request):
    base_url = settings.BASE_URL
    if request.method == 'POST':
        try:
            user_id = request.data.get('user_id')
            if not user_id:
                return Response({"error": "user_id is required"}, status=400)
            with connection.cursor() as cur:
                cur.execute("""
                    SELECT QRS.qr_code, QRS.id, QRS.downloaded_at,QRS.count,QRS.description
                    FROM QRS 
                    INNER JOIN USERS ON USERS.id = QRS.user_id
                    WHERE USERS.id = %s
                """, [user_id])
                qr_codes = cur.fetchall()
            qr_code_list = [
                {
                    "qr_code": qr_code[0],
                    "id": qr_code[1],
                    "downloaded_at": qr_code[2],
                    "count": qr_code[3],
                    "description": qr_code[4],
                    "baseurl": base_url
                } for qr_code in qr_codes
            ]
            return Response(qr_code_list, status=200)
        except Exception as e:
            logger.error(f"Server error: {str(e)}")
            return Response({"error": f"Server error: {str(e)}"}, status=500)
@api_view(['POST'])
def Scans(request, slug):
    if request.method == 'POST':
        try:
            with connection.cursor() as cursor:
                cursor.execute("SELECT id, count FROM QRS WHERE slug = %s", [slug])
                qr_code = cursor.fetchone()
                if qr_code:
                    qr_id, scan_count = qr_code
                    cursor.execute("UPDATE QRS SET count = count + 1 WHERE id = %s", [qr_id])
                    with connection.cursor() as cursor:
                        cursor.execute("SELECT link FROM QRS WHERE slug = %s", [slug])
                        link = cursor.fetchone()
                    return redirect(link)
                else:
                    return Response({"error": "Slug not found"}, status=404)
        except Exception as e:
            logger.error(f"Error in Scans view: {str(e)}")
            return Response({"error": f"Server error: {str(e)}"}, status=500)
    return Response({"error": "Method not allowed."}, status=405)