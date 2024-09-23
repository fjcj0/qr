import qrcode
from PIL import Image, ImageDraw
class EyeCorners:
    @staticmethod
    def frame0(qr_img, box_size):
        # Default corners, no modification needed
        return qr_img
    @staticmethod
    def frame1(qr_img, box_size):
        # Draw square corners with a certain padding
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        padding = box_size // 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    left_up = (x, y)
                    right_down = (x + box_size, y + box_size)
                    draw.rectangle([left_up, right_down], outline='black', width=padding)
        return qr_img
    @staticmethod
    def frame2(qr_img, box_size):
        # Draw rounded corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        radius = box_size // 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    left_up = (x, y)
                    right_down = (x + box_size, y + box_size)
                    draw.rectangle([left_up, right_down], fill='white')
                    draw.ellipse([left_up[0], left_up[1], left_up[0] + radius * 2, left_up[1] + radius * 2], fill='black')
                    draw.ellipse([right_down[0] - radius * 2, right_down[1] - radius * 2, right_down[0], right_down[1]], fill='black')
        return qr_img
    @staticmethod
    def frame3(qr_img, box_size):
        # Draw rounded corners with a border
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        radius = box_size // 4
        border = 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    left_up = (x, y)
                    right_down = (x + box_size, y + box_size)
                    draw.rectangle([left_up, right_down], outline='black', width=border)
                    draw.ellipse([left_up[0], left_up[1], left_up[0] + radius * 2, left_up[1] + radius * 2], outline='black', width=border)
                    draw.ellipse([right_down[0] - radius * 2, right_down[1] - radius * 2, right_down[0], right_down[1]], outline='black', width=border)
        return qr_img
    @staticmethod
    def frame4(qr_img, box_size):
        # Draw diagonal lines in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        line_length = box_size // 2
        line_width = 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    left_up = (x, y)
                    right_down = (x + box_size, y + box_size)
                    draw.line([left_up, (left_up[0] + line_length, left_up[1])], fill='black', width=line_width)
                    draw.line([(left_up[0], left_up[1]), (left_up[0], left_up[1] + line_length)], fill='black', width=line_width)
                    draw.line([(right_down[0], left_up[1]), (right_down[0] - line_length, left_up[1])], fill='black', width=line_width)
                    draw.line([(right_down[0], left_up[1]), (right_down[0], left_up[1] + line_length)], fill='black', width=line_width)
        return qr_img
    @staticmethod
    def frame5(qr_img, box_size):
        # Draw small circles in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        radius = box_size // 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    center = (x + radius, y + radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='black')
                    center = (x + box_size - radius, y + radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='black')
                    center = (x + radius, y + box_size - radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='black')
                    center = (x + box_size - radius, y + box_size - radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='black')
        return qr_img
    @staticmethod
    def frame6(qr_img, box_size):
        # Draw triangle corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        triangle_size = box_size // 2

        def draw_triangle(corner, size):
            x, y = corner
            points = [
                (x, y),
                (x + size, y),
                (x, y + size)
            ]
            draw.polygon(points, fill='black')
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    draw_triangle((x, y), triangle_size)
                    draw_triangle((x + box_size - triangle_size, y), triangle_size)
                    draw_triangle((x, y + box_size - triangle_size), triangle_size)
                    draw_triangle((x + box_size - triangle_size, y + box_size - triangle_size), triangle_size)
        return qr_img
    @staticmethod
    def frame7(qr_img, box_size):
        # Draw diagonal stripes in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        stripe_width = box_size // 8
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    for i in range(0, box_size, stripe_width):
                        draw.line([(x, y + i), (x + box_size, y + i)], fill='black')
                        draw.line([(x + i, y), (x + i, y + box_size)], fill='black')
        return qr_img
    @staticmethod
    def frame8(qr_img, box_size):
        # Draw large circles in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        radius = box_size // 2
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    center = (x + radius, y + radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='black')
        return qr_img
    @staticmethod
    def frame10(qr_img, box_size):
        # Draw zigzag corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        zigzag_size = box_size // 4
        def draw_zigzag(corner, size):
            x, y = corner
            draw.line([(x, y), (x + size, y)], fill='black', width=2)
            draw.line([(x + size, y), (x + size, y + size)], fill='black', width=2)
            draw.line([(x + size, y + size), (x, y + size)], fill='black', width=2)
            draw.line([(x, y + size), (x, y)], fill='black', width=2)
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    draw_zigzag((x, y), zigzag_size)
                    draw_zigzag((x + box_size - zigzag_size, y), zigzag_size)
                    draw_zigzag((x, y + box_size - zigzag_size), zigzag_size)
                    draw_zigzag((x + box_size - zigzag_size, y + box_size - zigzag_size), zigzag_size)
        return qr_img
    @staticmethod
    def frame11(qr_img, box_size):
        # Draw circular arcs in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        radius = box_size // 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    center = (x + radius, y + radius)
                    draw.arc([x, y, x + 2 * radius, y + 2 * radius], start=0, end=90, fill='black')

                    center = (x + box_size - radius, y + radius)
                    draw.arc([x + box_size - 2 * radius, y, x + box_size, y + 2 * radius], start=270, end=360, fill='black')

                    center = (x + radius, y + box_size - radius)
                    draw.arc([x, y + box_size - 2 * radius, x + 2 * radius, y + box_size], start=180, end=270, fill='black')

                    center = (x + box_size - radius, y + box_size - radius)
                    draw.arc([x + box_size - 2 * radius, y + box_size - 2 * radius, x + box_size, y + box_size], start=90, end=180, fill='black')
        return qr_img
    @staticmethod
    def frame12(qr_img, box_size):
        # Draw cut-out squares in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        cutout_size = box_size // 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    center = (x + cutout_size, y + cutout_size)
                    draw.rectangle([center[0] - cutout_size, center[1] - cutout_size, center[0] + cutout_size, center[1] + cutout_size], fill='white')
                    center = (x + box_size - cutout_size, y + cutout_size)
                    draw.rectangle([center[0] - cutout_size, center[1] - cutout_size, center[0] + cutout_size, center[1] + cutout_size], fill='white')
                    center = (x + cutout_size, y + box_size - cutout_size)
                    draw.rectangle([center[0] - cutout_size, center[1] - cutout_size, center[0] + cutout_size, center[1] + cutout_size], fill='white')
                    center = (x + box_size - cutout_size, y + box_size - cutout_size)
                    draw.rectangle([center[0] - cutout_size, center[1] - cutout_size, center[0] + cutout_size, center[1] + cutout_size], fill='white')
        return qr_img
    @staticmethod
    def frame13(qr_img, box_size):
        # Draw concentric circles in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        radius_step = box_size // 8
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    center = (x + box_size // 2, y + box_size // 2)
                    for r in range(radius_step, box_size // 2, radius_step):
                        draw.ellipse([center[0] - r, center[1] - r, center[0] + r, center[1] + r], outline='black')
        return qr_img
    @staticmethod
    def frame14(qr_img, box_size):
        # Draw cut-out circles in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        radius = box_size // 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    center = (x + radius, y + radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='white')
                    center = (x + box_size - radius, y + radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='white')
                    center = (x + radius, y + box_size - radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='white')
                    center = (x + box_size - radius, y + box_size - radius)
                    draw.ellipse([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], fill='white')
        return qr_img
    @staticmethod
    def frame16(qr_img, box_size):
        # Draw diagonal cuts in corners
        qr_img = qr_img.convert('RGB')
        width, height = qr_img.size
        draw = ImageDraw.Draw(qr_img)
        qr_img_bw = qr_img.convert('1')
        cut_size = box_size // 4
        for x in range(0, width, box_size):
            for y in range(0, height, box_size):
                if qr_img_bw.getpixel((x, y)) == 0:  # Black pixel
                    draw.polygon([(x, y), (x + cut_size, y), (x, y + cut_size)], fill='black')
                    draw.polygon([(x + box_size, y), (x + box_size - cut_size, y), (x + box_size, y + cut_size)], fill='black')
                    draw.polygon([(x, y + box_size), (x + cut_size, y + box_size), (x, y + box_size - cut_size)], fill='black')
                    draw.polygon([(x + box_size, y + box_size), (x + box_size - cut_size, y + box_size), (x + box_size, y + box_size - cut_size)], fill='black')
        return qr_img