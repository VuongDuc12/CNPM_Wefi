import tkinter as tk
from tkinter import PhotoImage
from PIL import Image, ImageTk, ImageFilter

def on_image_click(image_index):
    selected_label.config(text=f"Bạn đã chọn nước {water_names[image_index]}\nĐơn giá: {water_values[image_index]}")

window = tk.Tk()

window.title("Wefi-Máy bán nước")
window.geometry("400x700")
icon_path = "img/Logo-WRU.png"
icon_image = PhotoImage(file=icon_path)
window.iconphoto(True, icon_image)
def get():
    sotienvuanhap=nhaptien.get()
    sotienhienco.set("Số tiền hiện có: "+sotienvuanhap)
def tongsotien(index):
    soluongvuanhap=int(soluong.get())

    selected_label.config(text=f"Tổng số tiền là:  {soluongvuanhap*water_values[index]}")   



# Thêm hình ảnh nền
background_image_path = "img/dhthuyloi.jpg"
background_image = Image.open(background_image_path)
background_photo = ImageTk.PhotoImage(background_image)
background_label = tk.Label(window, image=background_photo)
background_label.place(relwidth=1, relheight=1)




lbl = tk.Label(window, text="Máy bán nước Wefi", height='2', font='arial 15 bold', bg='pink', fg='green')
lbl.grid(row=0, column=1,pady=20)

nhapsotien = tk.Label(window, text="Nhập số tiền:", height='1', font='arial 8 bold', bg='black', fg='yellow')
nhapsotien.grid(row=1, column=0, padx=10, pady=10)

nhaptien = tk.Entry(window, font='arial 12 bold', bg='white', fg="black", bd=0, width=10, highlightthickness=0)
nhaptien.grid(row=1, column=1, padx=10, pady=10)

naptien = tk.Button(window, text="Nạp tiền", font='arial 8 bold', bg='black', fg="red", bd=2, width=6, highlightthickness=0,command=get)
naptien.grid(row=1, column=2, padx=10, pady=10)

sotienhienco = tk.StringVar()
sotienhienco.set("Số tiền hiện có: 0")
duarasotien = tk.Label(window, textvariable=sotienhienco, height='1', font='arial 12 bold', bg='black', fg='yellow')
duarasotien.grid(row=2, column=1)

image_paths = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
    "img/10.png",
    "img/11.png",
    "img/12.png",  
    "img/13.png",
    "img/14.png",
    "img/15.png",
    "img/16.png",
    "img/17.png",
    "img/18.png",   
]
water_names = [
    "Nước CoCa",
    "Nước Thái",
    "Nước warrios đỏ",
    "Nước 7up",
    "Nước Revice vàng",
    "Nước Pepsi",
    "Nước C2",
    "Nước String đỏ",
    "Nước Mist",
    "Nước Bò Húc",
    "Nước Lọc",
    "Nước Minute Dâu",
    "Nước Minute Cam",
    "Nước Spite",
    "Nước Miranda",
    "Nước Fanta",
    "Nước Trà Liton",
    "Nước Revive trắng",
   
]
water_values = [
    10000,23000,10000,10000,10000,10000,8000,10000,14000,13000,5000,10000,10000,10000,10000,10000,10000,10000,
]
images = []

for image_path in image_paths:
    # Đọc hình ảnh gốc
    original_image = Image.open(image_path)
    
    # Điều chỉnh kích thước với chất lượng cao
    resized_image = original_image.resize((40, 40), Image.LANCZOS)
    
    # Chuyển thành đối tượng ImageTk.PhotoImage
    image = ImageTk.PhotoImage(resized_image)
    images.append(image)
for index, image in enumerate(images):
    label = tk.Label(window, image=image)
    label.image = image
    label.grid(row=3 + index // 3, column=index % 3, padx=10, pady=10)
    label.bind("<Button-1>", lambda event, index=index: on_image_click(index))

selected_label = tk.Label(window, text="", font="Arial 12 bold")
selected_label.grid(row=3 + len(images) // 3 + 1, column=0, columnspan=3, padx=10, pady=10)



nhapsoluong = tk.Label(window, text="Nhập số lượng:", height='1', font='arial 8 bold', bg='black', fg='yellow').place(x = 30 ,y =610)


soluong = tk.Entry(window, font='arial 12 bold', bg='white', fg="black", bd=0, width=10, highlightthickness=0).place(x = 120 ,y =610)

nhap = tk.Button(window, text="Nhập", font='arial 8 bold', bg='black', fg="red", bd=2, width=6, highlightthickness=0,command=tongsotien(index)).place(x = 180 ,y =610)


window.mainloop()
