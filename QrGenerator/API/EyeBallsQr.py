import qrcode
from PIL import Image, ImageDraw
class EyeBalls:
    @staticmethod
    def ball0(qr_img, box_size):
        # This method draws a simple circular ball
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 0)

    @staticmethod
    def ball1(qr_img, box_size):
        # This method draws a ball with slightly different characteristics
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 1)

    @staticmethod
    def ball2(qr_img, box_size):
        # Another variation of ball shape
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 2)

    @staticmethod
    def ball3(qr_img, box_size):
        # Different ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 3)

    @staticmethod
    def ball5(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 5)

    @staticmethod
    def ball6(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 6)

    @staticmethod
    def ball7(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 7)

    @staticmethod
    def ball8(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 8)

    @staticmethod
    def ball10(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 10)

    @staticmethod
    def ball11(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 11)

    @staticmethod
    def ball12(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 12)

    @staticmethod
    def ball13(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 13)

    @staticmethod
    def ball14(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 14)

    @staticmethod
    def ball15(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 15)

    @staticmethod
    def ball16(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 16)

    @staticmethod
    def ball17(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 17)

    @staticmethod
    def ball18(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 18)

    @staticmethod
    def ball19(qr_img, box_size):
        # Another ball style
        return EyeBalls.draw_ball(qr_img, box_size, 'circle', 19)

    @staticmethod
    def draw_ball(qr_img, box_size, shape_type, ball_id):
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        
        def draw_shape(center, size, shape_type, ball_id):
            radius = size / 2
            if shape_type == 'circle':
                draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='black')
            elif shape_type == 'square':
                draw.rectangle([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='black')
            elif shape_type == 'star':
                points = [
                    (center[0], center[1] - radius),
                    (center[0] + radius * 0.225, center[1] - radius * 0.225),
                    (center[0] + radius, center[1]),
                    (center[0] + radius * 0.225, center[1] + radius * 0.225),
                    (center[0], center[1] + radius),
                    (center[0] - radius * 0.225, center[1] + radius * 0.225),
                    (center[0] - radius, center[1]),
                    (center[0] - radius * 0.225, center[1] - radius * 0.225),
                ]
                draw.polygon(points, fill='black')
            # Add other shapes as needed
        
        for x in range(width):
            for y in range(height):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    draw_shape((x * box_size + box_size / 2, y * box_size + box_size / 2), box_size, shape_type, ball_id)
        
        return qr_img