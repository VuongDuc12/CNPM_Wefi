import tkinter as tk
from tkinter import PhotoImage

from PIL import Image, ImageTk, ImageFilter  # Import các module từ Pillow



window = tk.Tk()
window.title("Wefi-Máy bán nước")
window.geometry("400x700")

icon_path = "img/Logo-WRU.png"
# Tạo đối tượng PhotoImage từ tệp PNG
icon_image = PhotoImage(file=icon_path)
# Đặt biểu tượng cho cửa sổ
window.iconphoto(True, icon_image)
#khóa tăng giảm cửa sổ win dow
window.resizable(False,False)
# Mở hình ảnh sử dụng Pillow
image_path = "img/dhthuyloi.jpg"

image = Image.open(image_path)

# Áp dụng bộ lọc mờ (ví dụ: GaussianBlur)
blurred_image = image.filter(ImageFilter.GaussianBlur(radius=1.5))

# Chuyển đổi hình ảnh đã xử lý thành đối tượng PhotoImage
photo = ImageTk.PhotoImage(blurred_image)
tk.Label(window,image = photo).pack()

lbl = tk.Label(window,text = "Máy bán nước Wefi",height='2',font = 'arial 15 bold' ,bg='pink',fg = 'green')
lbl.place(x = 100 ,y =30)
#xin mời bạn nhập số tiền
nhapsotien = tk.Label(window, text = "Nhập số tiền:",height='1',font = 'arial 8 bold' ,bg='black',fg = 'yellow')
nhapsotien.place(x = 30 ,y =110)
nhaptien = tk.Entry(window,font = 'arial 7 bold' ,bg='white',fg="black",bd= 4 ,width=15,highlightthickness=0)
nhaptien.place(x = 120 ,y =110)
naptien =tk.Button(window,text="Nạp tiền",font = 'arial 7 bold',bg = 'black',fg = "red",bd= 4 ,width=7,highlightthickness=0)
naptien.place(x = 210 ,y =110)




#bảng chứa nước




window.mainloop()
