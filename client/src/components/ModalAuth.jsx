import React, { useState } from 'react';
import './ModalAuth.css';

export default function ModalAuth({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="auth-header">
          <h2>{isLogin ? 'Đăng Nhập Thành Viên' : 'Tạo Tài Khoản Mới'}</h2>
          <p>Trải nghiệm mua sắm tuyệt vời tại Shop</p>
        </div>

        <form className="auth-form">
          {!isLogin && (
            <div className="input-field">
              <label>Họ và Tên</label>
              <input type="text" placeholder="Nhập họ tên của bạn" required />
            </div>
          )}
          <div className="input-field">
            <label>Email / Số điện thoại</label>
            <input type="text" placeholder="Thành viên@gmail.com" required />
          </div>
          <div className="input-field">
            <label>Mật khẩu</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ NGAY'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'} 
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? ' Đăng ký ngay' : ' Đăng nhập'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
