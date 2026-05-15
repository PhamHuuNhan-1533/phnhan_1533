document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Tìm tên sản phẩm trong cùng một thẻ cha
            const productName = this.parentElement.querySelector('h2').innerText;
            
            // Hiển thị thông báo
            alert(`Bạn đã thêm "${productName}" vào giỏ hàng thành công!`);
            
            // Hiệu ứng đổi trạng thái nút
            const originalText = this.innerText;
            this.innerText = 'Đã Thêm ✓';
            this.style.backgroundColor = '#155724';
            
            // Quay lại trạng thái cũ sau 2 giây
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = '#04AA6D';
            }, 2000);
        });
    });
});