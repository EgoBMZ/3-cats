from PIL import Image

icons_img = Image.open('public/images/ref_icons.jpg')
w, h = icons_img.size
third = w // 3

icon1 = icons_img.crop((0, 0, third, h))
icon2 = icons_img.crop((third, 0, third*2, h))
icon3 = icons_img.crop((third*2, 0, w, h))

icon1.save('public/images/ref_icon1.jpg')
icon2.save('public/images/ref_icon2.jpg')
icon3.save('public/images/ref_icon3.jpg')
print("Icons split")
