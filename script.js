// Khởi tạo mảng các sản phẩm
let products = [
    { name: "Sản phẩm A", price: 100 },
    { name: "Sản phẩm B", price: 200 },
    { name: "Sản phẩm C", price: 300 },
];
// Khởi tạo giỏ hàng rỗng
let cart = [];
// Hàm hiển thị tất cả các sản phẩm có sẵn
function showProducts() {
    console.log("Các sản phẩm có sẵn:");
    for (let i = 0; i < products.length; i++) {
        console.log(i + 1 + ". " + products[i].name + " - " + products[i].price + " đ");
    }
}
// Hàm hiển thị giỏ hàng và tổng tiền phải trả
function showCart() {
    if (cart.length === 0) {
        console.log("Hiện tại chưa có sản phẩm nào trong giỏ hàng.");
    } else {
        console.log("Sản phẩm trong giỏ hàng:");
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            console.log(
                i + 1 + ". " + cart[i].name + " - " + cart[i].price + " đ (" + cart[i].quantity + ")"
            );
            totalPrice += cart[i].price * cart[i].quantity;
        }
        console.log("Tổng tiền phải trả: " + totalPrice + " đ");
    }
}
// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productIndex) {
    let product = products[productIndex];
    let existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: product.name, price: product.price, quantity: 1 });
    }
    console.log("Đã thêm " + product.name + " vào giỏ hàng.");
}
// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(itemIndex) {
    let item = cart[itemIndex];
    console.log(item)
    cart.splice(itemIndex, 1);
    console.log("Đã xóa " + item.name + " khỏi giỏ hàng.");
}
// Hàm để xác nhận thanh toán
function confirmPayment(totalPrice) {
    let payment = prompt("Nhập số tiền thanh toán:");
    if (payment == totalPrice) {
        console.log("Bạn đã thanh toán thành công.");
        return true;
    } else {
        console.log("Số tiền thanh toán không đúng.");
        return false;
    }
}
// Hiển thị menu và thực hiện các chức năng
while (true) {
    console.log("=======================");
    console.log("MENU");
    console.log("1. Hiển thị các sản phẩm có sẵn");
    console.log("2. Hiển thị giỏ hàng và tổng tiền phải trả");
    console.log("3. Thêm sản phẩm vào giỏ hàng");
    console.log("4. Xóa sản phẩm khỏi giỏ hàng");
    console.log("5. Thanh toán");
    console.log("6. Thoát");
    const choice = Number(prompt("Mời bạn chọn tính năng:"));
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2:
            showCart();
            break;
        case 3:
            addToCart();
            break;
        case 4:
            removeFromCart();
            break;
        case 5:
            confirmPayment();
            break;
        case 6:
            console.log("Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!");
            break;
        default:
            console.log("Lựa chọn của bạn không hợp lệ. Vui lòng chọn lại.");
            break;
    }
}