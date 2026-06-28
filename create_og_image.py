from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

# 1200x630 OG Image Dimensions
width, height = 1200, 630
image = Image.new("RGBA", (width, height), (18, 52, 40, 255)) # Rich Dark Emerald Forest

draw = ImageDraw.Draw(image)

# Background Gradient / Radial Glow
for y in range(height):
    r = int(18 + (32 - 18) * (y / height))
    g = int(52 + (84 - 52) * (y / height))
    b = int(40 + (65 - 40) * (y / height))
    draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

# Subtle glowing circles
glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
glow_draw.ellipse([750, -150, 1450, 550], fill=(58, 136, 108, 70))
glow_draw.ellipse([-150, 250, 450, 850], fill=(212, 163, 115, 60))
glow = glow.filter(ImageFilter.GaussianBlur(40))
image = Image.alpha_composite(image, glow)
draw = ImageDraw.Draw(image)

# Load Ultra-Pretty Korean Fonts
font_path_bold = "C:/Windows/Fonts/NanumGothicExtraBold.ttf"
font_path_medium = "C:/Windows/Fonts/NanumGothicBold.ttf"

if not os.path.exists(font_path_bold):
    font_path_bold = "C:/Windows/Fonts/malgunbd.ttf"
if not os.path.exists(font_path_medium):
    font_path_medium = "C:/Windows/Fonts/malgun.ttf"

font_main_title = ImageFont.truetype(font_path_bold, 48)
font_sub_title = ImageFont.truetype(font_path_medium, 24)
font_bullet = ImageFont.truetype(font_path_medium, 22)
font_badge = ImageFont.truetype(font_path_bold, 19)
font_url = ImageFont.truetype(font_path_bold, 22)

# Glassmorphism White Card Box on the Left
card_box = Image.new("RGBA", (width, height), (0, 0, 0, 0))
card_draw = ImageDraw.Draw(card_box)
card_draw.rounded_rectangle([50, 50, 790, 580], radius=28, fill=(255, 255, 255, 245), outline=(212, 163, 115, 200), width=3)
image = Image.alpha_composite(image, card_box)
draw = ImageDraw.Draw(image)

# Badges (Top of Card)
# Badge 1: Forest Rep
draw.rounded_rectangle([85, 85, 275, 125], radius=14, fill=(232, 243, 238, 255), outline=(58, 136, 108, 100), width=1)
draw.text((100, 93), "🌲 커리어숲 대표", font=font_badge, fill=(20, 54, 43, 255))

# Badge 2: 16-Year Counselor
draw.rounded_rectangle([290, 85, 515, 125], radius=14, fill=(254, 250, 224, 255), outline=(212, 163, 115, 120), width=1)
draw.text((305, 93), "✨ 16년차 직업상담사", font=font_badge, fill=(176, 125, 50, 255))

# Title Lines with Stylish Spacing
draw.text((85, 158), "사람과 AI를, 막막함과 가능성을 잇는", font=font_sub_title, fill=(66, 96, 80, 255))
draw.text((85, 202), "AI 커리어 컨설턴트 임금희", font=font_main_title, fill=(18, 52, 40, 255))

# Underline Decor under title
draw.line([(85, 268), (350, 268)], fill=(212, 163, 115, 255), width=4)

# Bullet Points with Clean Typography
bullets = [
    "• 신중년 & 소상공인 AI 활용 1:1 맞춤 커리어 컨설팅",
    "• 현장 중심 취업 역량 강화 및 디지털 리터러시 강의",
    "• 직접 개발하는 맞춤형 AI 앱 & 실전 프롬프트 콘텐츠"
]

y_pos = 295
for b in bullets:
    draw.text((85, y_pos), b, font=font_bullet, fill=(35, 65, 52, 255))
    y_pos += 44

# Bottom CTA Banner in Card
draw.rounded_rectangle([85, 475, 755, 545], radius=18, fill=(18, 52, 40, 255))
draw.text((115, 498), "🌐 공식 웹사이트: www.careerforest.co.kr", font=font_url, fill=(167, 243, 208, 255))

# Composite Avatar Image on Right Side
avatar_path = "d:/0000_최신5월/career-forest-app/public/avatar.png"
if os.path.exists(avatar_path):
    avatar = Image.open(avatar_path).convert("RGBA")
    avatar.thumbnail((440, 560), Image.Resampling.LANCZOS)
    av_w, av_h = avatar.size
    paste_x = 800 + (350 - av_w) // 2
    paste_y = 630 - av_h
    image.paste(avatar, (paste_x, paste_y), avatar)

# Composite Logo on top right of card
logo_path = "d:/0000_최신5월/career-forest-app/public/logo.png"
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")
    logo.thumbnail((75, 75), Image.Resampling.LANCZOS)
    image.paste(logo, (685, 75), logo)

# Save high quality PNGs
out_public = "d:/0000_최신5월/career-forest-app/public/og-image.png"
out_root = "d:/0000_최신5월/og-image.png"
image.save(out_public, "PNG")
image.save(out_root, "PNG")

print("Ultra-stylish OG Image generated successfully!")
