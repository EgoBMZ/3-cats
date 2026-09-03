from PIL import Image
import os

os.makedirs('public/images', exist_ok=True)

# 1. Favicon from manual -demo 2.png
img = Image.open('conext/images/manual -demo 2.png')
w, h = img.size
# Top right quadrant has the isotipo
top_right = img.crop((int(w*0.75), int(h*0.05), int(w*0.95), int(h*0.35)))
top_right.save('app/icon.png')
print(f"Favicon extracted to app/icon.png")

# 2. Illustrations from referencia-web.webp
ref = Image.open('conext/images/referencia-web.webp')
rw, rh = ref.size

# Hero (Top right area)
hero = ref.crop((int(rw*0.45), int(rh*0.015), int(rw*0.95), int(rh*0.13)))
hero.save('public/images/ref_hero.jpg')

# Services (3 icons in a row)
icons = ref.crop((int(rw*0.1), int(rh*0.22), int(rw*0.9), int(rh*0.28)))
icons.save('public/images/ref_icons.jpg')

# Solution (Banner)
solution = ref.crop((int(rw*0.05), int(rh*0.33), int(rw*0.45), int(rh*0.39)))
solution.save('public/images/ref_solution.jpg')

print("All extractions completed.")
