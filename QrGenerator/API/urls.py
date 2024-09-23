from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views as drf_views
urlpatterns = [
    path('GetQr/', views.GetQr, name='get_qr'),
    path('Users/', views.Users, name='users'),
    path('Login/', views.Login, name='login'),
    path('GetTokenInfo/', views.GetTokenInfo, name='token'),
    path('DeleteAccount/', views.DeleteAccount, name='DeleteAccount'),
    path('ChangeInformation/', views.ChangeInformation, name='ChangeInformation'),
    path('addqr/',views.AddQr,name='addqr'),
    path('SelectQr/',views.SelestQr,name='selectqr'),
    path('scan/<slug>/', views.Scans, name='scan_qr'),
    path('api-token-auth/', drf_views.obtain_auth_token, name='api_token_auth'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)