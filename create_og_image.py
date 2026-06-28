from PIL import Image, ImageDraw, ImageFont
import os

# 1200x630 OG Image Dimensions
width, height = 1200, 630
image = Image.new("RGBA", (width, height), (20, 54, 43, 255)) # Deep Forest Green

draw = ImageDraw.Draw(image)

# Background Gradient / Shapes
for y in range(height):
    r = int(20 + (30 - 20) * (y / height))
    g = int(54 + (89 - 54) * (y / height))
    b = int(43 + (69 - 43) * (y / height))
    draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

# Subtle decorative circle
draw.ellipse([800, -100, 1400, 500], fill=(42, 157, 143, 40))
draw.ellipse([-100, 300, 400, 800], fill=(212, 163, 115, 30))

# Try loading fonts, fall back to default
font_title = None
font_sub = None
font_badge = None

font_paths = [
    "C:/Windows/Fonts/malgun.ttf",
    "C:/Windows/Fonts/malgunbd.ttf",
    "C:/Windows/Fonts/gulim.ttc",
]

for fp in font_paths:
    if os.path.exists(fp):
        try:
            font_title = ImageFont.truetype(fp, 46)
            font_sub = ImageFont.truetype(fp, 24)
            font_badge = ImageFont.truetype(fp, 20)
            break
        except Exception:
            pass

if font_title is None:
    font_title = font_sub = font_badge = ImageFont.load_default()

# Draw Glass Container Card for Text
draw.rounded_rectangle([60, 60, 780, 570], radius=24, fill=(255, 255, 255, 240), outline=(212, 163, 115, 180), width=2)

# Badges inside card
draw.rounded_rectangle([90, 95, 280, 135], radius=12, fill=(232, 243, 238, 255))
draw.text((105, 103), "🌲 커리어숲 대표", font=font_badge, fill=(30, 89, 69, 255))

draw.rounded_rectangle([295, 95, 510, 135], radius=12, fill=(254, 250, 224, 255))
draw.text((310, 103), "✨ 16년차 직업상담사", font=font_badge, fill=(176, 125, 50, 255))

# Title Text
draw.text((90, 170), "사람과 AI를, 막막함과 가능성을 잇는", font=font_sub, fill=(66, 88, 77, 255))
draw.text((90, 215), "AI 커리어 컨설턴트 임금희", font=font_title, fill=(20, 54, 43, 255))

# Subtitle / Details
draw.text((90, 300), "• 신중년 & 소상공인 AI 활용 1:1 커리어 컨설팅", font=font_sub, fill=(30, 89, 69, 255))
draw.text((90, 345), "• 현장 중심 취업 역량 강화 및 디지털 리터러시 강의", font=font_sub, fill=(30, 89, 69, 255))
draw.text((90, 390), "• 직접 개발하는 맞춤형 AI 앱 & 실전 프롬프트 콘텐츠", font=font_sub, fill=(30, 89, 69, 255))

# Footer Link Banner in Card
draw.rounded_rectangle([90, 465, 750, 535], radius=16, fill=(30, 89, 69, 255))
draw.text((110, 488), "🌐 공식 웹사이트: www.careerforest.co.kr", font=font_sub, fill=(255, 255, 255, 255))

# Composite Avatar Image on Right
avatar_path = "d:/0000_최신5월/career-forest-app/public/avatar.png"
if os.path.exists(avatar_path):
    avatar = Image.open(avatar_path).convert("RGBA")
    # Resize keeping aspect ratio
    avatar.thumbnail((420, 540), Image.Resampling.LANCZOS)
    # Paste on right side
    av_w, av_h = avatar.size
    paste_x = 800 + (360 - av_w) // 2
    paste_y = 630 - av_h
    image.paste(avatar, (paste_x, paste_y), avatar)

# Composite Logo on top right corner of card or background
logo_path = "d:/0000_최신5월/career-forest-app/public/logo.png"
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")
    logo.thumbnail((70, 70), Image.Resampling.LANCZOS)
    image.paste(logo, (680, 80), logo)

# Save output OG images
out_public = "d:/0000_최신5월/career-forest-app/public/og-image.png"
out_root = "d:/0000_최신5월/og-image.png"
image.save(out_public, "PNG")
image.save(out_root, "PNG")

print(f"OG Image generated successfully at {out_public} and {out_root}")
