// Hàm mở Modal Đăng Nhập
function openModal() {
    document.getElementById('authModal').style.display = 'flex';
}

// Hàm đóng Modal Đăng Nhập
function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Bấm ra ngoài vùng trắng thì tự đóng Modal
window.onclick = function(event) {
    let modal = document.getElementById('authModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
