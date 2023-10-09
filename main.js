// main.js
var soduhientai =0;
var tongthanhtoan =0;
var dem =0;
var balance = 0;


document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.querySelector(".sotiennhap");
    const balanceElement = document.querySelector(".sodu");
    balanceElement.textContent = `Số dư: ${balance}`;

    document.querySelector(".nap").addEventListener("click", function () {
        const inputValue = parseInt(inputElement.value);

        if (!isNaN(inputValue) && inputValue > 0 && inputValue <1000000) {
            balance += inputValue;
            soduhientai = parseInt(balance);

            balanceElement.textContent = `Số dư: ${balance}`;

            inputElement.value = "";
        } else {
            alert("Vui lòng nhập vào số tiền nhỏ hơn 1000000.");
            inputElement.value = "";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.querySelector(".timkiem");
    const khongtimthay = document.querySelector(".khongthaysp");

    const drinksList = document.querySelectorAll(".thongtintrainuoc");

    inputElement.addEventListener("input", function () {
        const searchText = inputElement.value.toLowerCase();

        var dem = 0;

        drinksList.forEach(function (drink) {
            const drinkName = drink.querySelector("h2").textContent.toLowerCase();

            if (drinkName.includes(searchText)) {
                drink.style.display = "grid";

                dem = dem + 1;
            } 
            else {
                
                drink.style.display = "none";
            }
        });

        if (dem === 0) {
            khongtimthay.textContent = "Không tìm thấy sản phẩm.";

        } else {
            khongtimthay.textContent = "";
        }
    });
    const muahangButton = document.querySelector(".muahangtaiday");

    const contentElement = document.querySelector(".content");

    contentElement.style.display = "none";
    const content = document.querySelector(".content");
    muahangButton.addEventListener("click", function () {
        contentElement.style.display = "block";
      
    });
    



    const nutgiohang = document.querySelectorAll(".dathang");
    const giohang = document.querySelector(".giohang");
    
    nutgiohang.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            var btnItem = event.target;
            var product = btnItem.closest(".thongtintrainuoc"); 
            var productimg = product.querySelector("img");
            var productname = product.querySelector(".detail h2").textContent; 
            var productgia = product.querySelector(".detail span").textContent; 
            
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
    const iconclosemuahang =document.querySelector(".iconclosemuahang");
   

    iconclosemuahang.addEventListener("click", function () {
        contentElement.style.display = "none";

    });
    

    var listgiohang = document.querySelector(".header_card-list-items"); // Thêm "document."
    var okeluon = document.querySelector(".header_card-list");
    const nuthtemgiohang = document.querySelector(".nuthtemgiohang");

    nuthtemgiohang.addEventListener("click", function () {
        var productsoluongtext = giohang.querySelector(".soluong .nhapsoluong");

        const soluong = parseInt(productsoluongtext.value);

        if (!isNaN(soluong) && soluong > 0) {
            

        giohang.style.display = "none"; 
        var notice = document.querySelector(".header_card-notice");
        var notice_dem = document.querySelector(".header_card-notice").textContent;
        var dem = parseInt(notice_dem);
        dem+=1;
        notice.textContent = dem;
        if(soindex != null ){
            var classname = "header_card-items" + soindex;
            console.log(classname);
            var link = "." + classname;
            
            var listnumber = listgiohang.querySelector(link);
            var productimg = giohang.querySelector("img");
            var productname = giohang.querySelector(".detail h2").textContent;
            var productgiatext = giohang.querySelector(".detail span").textContent;
            var productsoluongtext = giohang.querySelector(".soluong .nhapsoluong");
            var productsoluong = parseInt(soluong);
            var productgia = parseInt(productgiatext);
            var thanhtien = productgia * productsoluong;
            var giohangimg = listnumber.querySelector("img");
            var giohangname = listnumber.querySelector(".header_card-items-name");
            var giohanggia = listnumber.querySelector(".header_card-items-price");
            var giohangsoluong = listnumber.querySelector(".header_card-items-qnt");
            tongthanhtoan = parseInt(document.querySelector(".header_card-muahang span").textContent);        
            var thanhtoansotien = okeluon.querySelector(".header_card-muahang span");

            tongthanhtoan += thanhtien;
            console.log(tongthanhtoan);
            giohangimg.src = productimg.src;
            giohangname.textContent = productname;
            giohanggia.textContent = productgia;
            giohangsoluong.textContent = productsoluong;
            thanhtoansotien.textContent = tongthanhtoan;


            if (listnumber) {
                listnumber.style.display = "flex";
                productsoluongtext.value ="";
                soindex = null;
            
                
             }


        


        }

        else {
            var classname = "header_card-items" + dem;
            var link = "." + classname;
            
            var listnumber = listgiohang.querySelector(link);
            var productimg = giohang.querySelector("img");
            var productname = giohang.querySelector(".detail h2").textContent;
            var productgiatext = giohang.querySelector(".detail span").textContent;
            var productsoluongtext = giohang.querySelector(".soluong .nhapsoluong");
            var productsoluong = parseInt(soluong);
            var productgia = parseInt(productgiatext);
            var thanhtien = productgia * productsoluong;
            var giohangimg = listnumber.querySelector("img");
            var giohangname = listnumber.querySelector(".header_card-items-name");
            var giohanggia = listnumber.querySelector(".header_card-items-price");
            var giohangsoluong = listnumber.querySelector(".header_card-items-qnt");
            tongthanhtoan = parseInt(document.querySelector(".header_card-muahang span").textContent);        
            var thanhtoansotien = okeluon.querySelector(".header_card-muahang span");

            tongthanhtoan += thanhtien;
            console.log(tongthanhtoan);
            giohangimg.src = productimg.src;
            giohangname.textContent = productname;
            giohanggia.textContent = productgia;
            giohangsoluong.textContent = productsoluong;
            thanhtoansotien.textContent = tongthanhtoan;


            if (listnumber) {
                listnumber.style.display = "flex";
                productsoluongtext.value ="";
                
            
                
            }


        }
        }
         else {
            alert("Vui lòng nhập lại số lượng.");
        }

    });
    
    
    


    // var dem = 0
    // var listgiohang = product.querySelector(".header_card-list-items");
    // nuthtemgiohang.addEventListener("click", function () {
    //     dem +1;
    //     giohang.style.display = "none";
    //     var notice = product.querySelector("header_card-notice");
    //     notice.textContent = dem;
    //     var classname = "header_card-items"+dem
    //     var link ="."+ classname
        
    //     var listnumber = listgiohang.querySelector(link);
    //     listnumber.style.display = "block";


    //     var productimg = giohang.querySelector("img");
    //     var productname = giohang.querySelector(".detail h2").textContent; // Lấy nội dung của thẻ h2
    //     var productgiatext = giohang.querySelector(".detail span").textContent;
    //     var productsoluongtext = giohang.querySelector(".detail h3").textContent;
    //     var productsoluong = parseInt(productsoluongtext);
    //     var productgia = parseInt(productgiatext);
    //     var thanhtien = productgia*productsoluong;

    //         var giohangimg = giohang.querySelector(".anhnuoc img");
    //         var giohangname = giohang.querySelector(".detail h2");
    //         var giohanggia = giohang.querySelector(".detail span");
    //         var giohangsoluong = giohang.querySelector(".detail soluong");
            
            
    //         giohangimg.src = productimg.src;
    //         giohangname.textContent = productname;
    //         giohanggia.textContent = productgia;



    // });
    
    var nutxoa = document.querySelectorAll(".header_card-items-remove");
    var soindex = null;

    nutxoa.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            soindex = index + 1 ;
            console.log(soindex);    
            var notice = document.querySelector(".header_card-notice");
            var notice_dem = document.querySelector(".header_card-notice").textContent;
            dem = parseInt(notice_dem);
            tongthanhtoan = parseInt(document.querySelector(".header_card-muahang span").textContent);
            console.log("Tong thanh toan = ",tongthanhtoan);
            var okeluon = document.querySelector(".header_card-list");
            var thanhtoansotien = okeluon.querySelector(".header_card-muahang span");
            var btnItem = event.target;
            var product = btnItem.closest(".header_cardtt");

            console.log("Sotientru = ",product);

            product.style.display = "none";
            var giohanggia = product.querySelector(".header_card-items-price").textContent;
            var giohangsoluong = product.querySelector(".header_card-items-qnt").textContent;
            var productgia = parseInt(giohanggia);
            var productsoluong = parseInt(giohangsoluong);
            var tongsotientru = productgia * productsoluong;
            console.log("Sotientru = ",tongsotientru);

            tongthanhtoan = tongthanhtoan - tongsotientru;
        
                
            thanhtoansotien.textContent = tongthanhtoan;
            console.log("dem = ",dem);

            dem-=1;
            console.log("dem = ",dem);

            notice.textContent = dem;
            
            
            
        });
    });




    //thanh toan

    const nutthanhtoan =document.querySelector(".nutthanhtoan");
   

    nutthanhtoan.addEventListener("click", function () {
        console.log(soduhientai)

        console.log(tongthanhtoan)

        if(soduhientai>=tongthanhtoan){
            soduhientai -=tongthanhtoan;

            alert(`Bạn đã mua hàng thành công.\n Số tiền trả lại là: ${soduhientai}`);
            soduhientai =0;
            balance = 0;
            const balanceElement = document.querySelector(".sodu");
            balanceElement.textContent = `Số dư: ${balance}`;
            
            


        }
        else alert("Số dư không đủ vui lòng nạp thêm tiền.");

    });


    
    
    

});







document.addEventListener("DOMContentLoaded", function () {
    // login
    const login = document.querySelector(".login-card");
    const quanlytaiday = document.querySelector(".clickquanly");
    quanlytaiday.addEventListener("click", function () {
        login.style.display = "block";
    });

    const iconcloselogin = document.querySelector(".iconcloselogin");
    iconcloselogin.addEventListener("click", function () {
        login.style.display = "none";
    });

    const dangnhap = document.querySelector(".login");
    dangnhap.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = document.querySelector(".login-card .username");
        const password = document.querySelector(".login-card .password");
        const saimk = document.querySelector(".login-card .saimk");
        const container2 = document.querySelector(".container2");
        const container = document.querySelector(".container");

        const tk = username.value.toLowerCase();
        const mk = password.value;
        console.log(tk);
        console.log(mk);
        if (tk === "admin" && mk === "admin123") {
            login.style.display = "none";
            saimk.style.display = "none";
            username.value = "";
            password.value = "";
            container.style.display = "none";
            container2.style.display = "grid";


        } else {
            saimk.style.display = "block";
            username.value = "";
            password.value = "";

        }
    });

    // end login


    const logout = document.querySelector(".logout");
    const container2 = document.querySelector(".container2");
    const container = document.querySelector(".container");

    logout.addEventListener("click", function (event) {
        container2.style.display = "none";
        container.style.display = "flex";

    });
});


