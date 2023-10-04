// main.js
document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.querySelector(".sotiennhap");
    const balanceElement = document.querySelector(".sodu");
    
    // Khoi tao so du ban dau
    let balance = 0;

    // Cập nhật số dư ban đầu trên giao diện
    balanceElement.textContent = `Số dư: ${balance}`;

    // Xử lý sự kiện khi người dùng nhấn nút "Nạp"
    document.querySelector(".nap").addEventListener("click", function () {
        // Lấy giá trị nhập vào từ input
        const inputValue = parseInt(inputElement.value);

        // Kiểm tra xem giá trị nhập vào có hợp lệ hay không
        if (!isNaN(inputValue) && inputValue > 0) {
            // Cộng giá trị nhập vào vào số dư hiện tại
            balance += inputValue;

            // Cập nhật số dư trên giao diện
            balanceElement.textContent = `Số dư: ${balance}`;

            // Xóa giá trị nhập vào từ input
            inputElement.value = "";
        } else {
            // Hiển thị thông báo lỗi nếu giá trị nhập vào không hợp lệ
            alert("Vui lòng nhập số tiền hợp lệ.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tham chiếu đến phần tử input có class là "timkiem"
    const inputElement = document.querySelector(".timkiem");
    const khongtimthay = document.querySelector(".khongthaysp");

    // Lấy danh sách tất cả các món nước trong danh sách có class là "thongtintrainuoc"
    const drinksList = document.querySelectorAll(".thongtintrainuoc");

    // Thêm sự kiện "input" cho phần tử input
    inputElement.addEventListener("input", function () {
        // Lấy giá trị nhập vào từ thanh tìm kiếm và chuyển đổi thành chữ thường
        const searchText = inputElement.value.toLowerCase();

        // Đặt một biến để theo dõi số sản phẩm tìm thấy
        var dem = 0;

        // Duyệt qua danh sách các món nước
        drinksList.forEach(function (drink) {
            // Lấy tên món nước và chuyển đổi thành chữ thường
            const drinkName = drink.querySelector("h2").textContent.toLowerCase();

            // Kiểm tra xem tên món nước có chứa từ khóa tìm kiếm không
            if (drinkName.includes(searchText)) {
                // Hiển thị món nước nếu phù hợp
                drink.style.display = "grid";

                // Tăng biến đếm sản phẩm tìm thấy
                dem = dem + 1;
            } else {
                // Ẩn món nước nếu không phù hợp
                
                drink.style.display = "none";
            }
        });

        // Kiểm tra nếu không có sản phẩm nào được tìm thấy
        if (dem === 0) {
            khongtimthay.textContent = "Không tìm thấy sản phẩm.";

        } else {
            // Ẩn phần tử khongtimthay nếu có sản phẩm được tìm thấy
            khongtimthay.textContent = "";
        }
    });
    // Lấy tham chiếu đến phần tử nút "Mua hàng tại đây"
    const muahangButton = document.querySelector(".muahangtaiday");

    // Lấy tham chiếu đến phần tử content
    const contentElement = document.querySelector(".content");

    // Ẩn phần tử content ban đầu
    contentElement.style.display = "none";
    const content = document.querySelector(".content");
    // Thêm sự kiện click cho nút "Mua hàng tại đây"
    muahangButton.addEventListener("click", function () {
        // Hiển thị phần tử content khi nút được nhấn
        contentElement.style.display = "block";
      
    });
    



    const nutgiohang = document.querySelectorAll(".dathang");
    const giohang = document.querySelector(".giohang");
    
    nutgiohang.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            var btnItem = event.target;
            var product = btnItem.closest(".thongtintrainuoc"); // Sử dụng closest để tìm phần tử cha gần nhất
            var productimg = product.querySelector("img");
            var productname = product.querySelector(".detail h2").textContent; // Lấy nội dung của thẻ h2
            var productgia = product.querySelector(".detail span").textContent; // Lấy nội dung của thẻ span (giá)
            
            // Hiển thị phần giohang và cập nhật thông tin sản phẩm
            giohang.style.display = "block";
            var giohangimg = giohang.querySelector(".anhnuoc img");
            var giohangname = giohang.querySelector(".detail h2");
            var giohanggia = giohang.querySelector(".detail span");
    
            giohangimg.src = productimg.src;
            giohangname.textContent = productname;
            giohanggia.textContent = productgia;
        });
    });
    
    const iconclosesanpham =document.querySelector(".iconclosesanpham");
    iconclosesanpham.addEventListener("click", function () {
        giohang.style.display = "none";

    });
});




