import tkinter as tk
from tkinter import PhotoImage
from PIL import Image, ImageTk
inrathanhtoan = ""
tongthanhtoan = 0
sotiendangcosan = 0
def on_image_click(index):
    global selected_index
    selected_index = index
    selected_label.config(text=f"Bạn đã chọn nước {water_names[index]}\nĐơn giá: {water_values[index]} VND")

def get():
    sotienvuanhap = int(nhaptien.get())
    global sotiendangcosan
    sotiendangcosan += sotienvuanhap 

    sotienhienco.set(f"Số tiền hiện có: \n{sotiendangcosan} VND")

def tongsotien():
    global selected_index, inrathanhtoan, tongthanhtoan
    if selected_index is not None:
        soluongvuanhap = int(soluong.get())
        inratt = f"{water_names[selected_index]} : {soluongvuanhap} chai\n"
        tongtt = soluongvuanhap * water_values[selected_index]
        inrathanhtoan += inratt
        tongthanhtoan += tongtt
    thanhtoan.config(text=f"Hóa đơn thanh toán\n {inrathanhtoan}  \n Tổng thanh toán là: {tongthanhtoan} VND")

def theend():
    global sotiendangcosan ,tongthanhtoan
    global inrathanhtoan, tongthanhtoan

    if sotiendangcosan>=tongthanhtoan:  
        ketthucthoi.config(text=f"Bạn đã thanh toán thành công.\nSố tiền trả lại: {sotiendangcosan - tongthanhtoan} VND")
        sotiendangcosan = 0
        inrathanhtoan =""
        tongthanhtoan = 0
        sotienhienco.set(f"Số tiền hiện có: \n{sotiendangcosan} VND")

    else:  
        ketthucthoi.config(text=f"Số dư của bạn không đủ.\nVui lòng nạp thêm tiền.")
        

window = tk.Tk()
window.title("Wefi-Máy bán nước")
window.geometry("600x700")
window.resizable(False,False)

icon_path = "img/Logo-WRU.png"
icon_image = PhotoImage(file=icon_path)
window.iconphoto(True, icon_image)

# Thêm hình ảnh nền
background_image_path = "img/dhthuyloi.jpg"
background_image = Image.open(background_image_path)
background_photo = ImageTk.PhotoImage(background_image)
background_label = tk.Label(window, image=background_photo)
background_label.place(relwidth=1, relheight=1)

lbl = tk.Label(window, text="Máy bán nước Wefi", height='2', font='arial 15 bold', bg='pink', fg='green')
lbl.grid(row=0, column=1, pady=20)

nhapsotien = tk.Label(window, text="Nhập số tiền:", height='1', font='arial 8 bold', bg='black', fg='yellow')
nhapsotien.grid(row=1, column=0, padx=10, pady=10)

nhaptien = tk.Entry(window, font='arial 12 bold', bg='white', fg="black", bd=0, width=10, highlightthickness=0)
nhaptien.grid(row=1, column=1, padx=10, pady=10)

naptien = tk.Button(window, text="Nạp tiền", font='arial 8 bold', bg='black', fg="red", bd=2, width=6, highlightthickness=0, command=get)
naptien.grid(row=1, column=2, padx=10, pady=10)

sotienhienco = tk.StringVar()
sotienhienco.set("Số tiền hiện có: 0 VND")
duarasotien = tk.Label(window, textvariable=sotienhienco, height='3', font='arial 12 bold', bg='black', fg='yellow')
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
    "Nước Thái",
    "Nước Warrios đỏ",
    "Nước 7up",
    "Nước Revice vàng",
    "Nước Pepsi",
    "Nước C2",
    "Nước String đỏ",
    "Nước Mist",
    "Nước Bò Húc",
    "Nước Lọc",
    "Nước Minute Dâu",
    "Nước Minute Cam",
    "Nước Spite",
    "Nước Miranda",
    "Nước Fanta",
    "Nước Trà Liton",
    "Nước Revive trắng",
]

water_values = [
    10000, 23000, 10000, 10000, 10000, 10000, 8000, 10000, 14000, 13000, 5000, 10000, 10000, 10000, 10000, 10000, 10000, 10000,
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
index = 0
for index, image in enumerate(images):
    label = tk.Label(window, image=image)
    label.image = image
    label.grid(row=3 + index // 3, column=index % 3, padx=10, pady=10)
    label.bind("<Button-1>", lambda event, index=index: on_image_click(index))

selected_label = tk.Label(window, text="", font="Arial 9 bold")
selected_label.place(x=380, y=100)

nhapsoluong = tk.Label(window, text="Nhập số lượng:", height='1', font='arial 8 bold', bg='black', fg='yellow')
nhapsoluong.place(x=380, y=140)

soluong = tk.Entry(window, font='arial 12 bold', bg='white', fg="black", bd=0, width=10, highlightthickness=0)
soluong.place(x=470, y=140)


  # Chọn một index mặc định ban đầu
nhap = tk.Button(window, text="Nhập", font='arial 8 bold', bg='black', fg="red", bd=2, width=6, highlightthickness=0, command=lambda: tongsotien())
nhap.place(x=530, y=140)
thanhtoan = tk.Label(window, text="", font="Arial 9 bold",bg = "black",fg ="white")
thanhtoan.place(x=380, y=180)
ketthuc = tk.Button(window, text="Thanh toán", font='arial 8 bold', bg='red', fg="black", bd=2, width=12, highlightthickness=0, command=lambda: theend())
ketthuc.place(x=420, y=400)
ketthucthoi = tk.Label(window, text="", font="Arial 9 bold",bg = "black",fg ="white")
ketthucthoi.place(x=380, y=430)
window.mainloop()
