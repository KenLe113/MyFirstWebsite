// Tạo đối tượng giỏ hàng
var cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    var existingProduct = cart.find(function(p) {
        return p.id === product.id;
    });
    if (existingProduct) {
        // Nếu đã có sản phẩm này trong giỏ hàng, tăng số lượng lên 1
        existingProduct.quantity++;
    } else {
        // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
        product.quantity = 1;
        cart.push(product);
    }
    console.log('Product added to cart:', product);
}

// Hàm hiển thị giỏ hàng
function showCart() {
    var cartItems = '';
    for (var i = 0; i < cart.length; i++) {
        cartItems += cart[i].name + ' - ' + cart[i].price + ' x ' + cart[i].quantity + '<br>';
    }
    document.getElementById('cart').innerHTML = cartItems;
}

// Hàm tính tổng giá trị đơn hàng
function calculateTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    console.log('Total:', total);
    document.getElementById('total').innerHTML = 'Total: $' + total;
}

// Hàm đặt hàng
function placeOrder() {
    // Gửi thông tin đơn hàng đến máy chủ để xử lý
    // Sau khi xử lý xong, xóa toàn bộ giỏ hàng
    cart = [];
    showCart();
    calculateTotal();
    alert('Your order has been placed!');
}