import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/DetailBook.css";

const DetailBook = () => {
  const location = useLocation();
  const library = location.state;

  if (!library) {
    return (
      <div className="container text-center py-5 text-muted">
        <h4>Không có dữ liệu sách</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row g-4 book-detail shadow-lg p-4 rounded">
        {/* Hình ảnh sách */}
        <div className="col-md-5 text-center">
          <img
            src={library.img}
            alt={library.title}
            className="img-fluid rounded shadow-sm book-image"
          />
        </div>

        {/* Thông tin chi tiết */}
        <div className="col-md-7">
          <h1 className="fw-bold text-dark">{library.title}</h1>
          <p className="text-muted">
            Tác giả: <span className="fw-semibold">{library.author}</span>
          </p>
          <p className="text-muted">
            Năm xuất bản:{" "}
            <span className="fw-semibold">{library.yearPublication}</span>
          </p>
          <p className="text-muted">
            Số lượng còn lại:{" "}
            <span className="fw-semibold text-danger">{library.quantity}</span>
          </p>

          {/* Nút thao tác */}
          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-outline-danger flex-grow-1 custom-btn">
              Thêm vào giỏ hàng
            </button>
            <button className="btn btn-primary flex-grow-1 custom-btn custom-btn-buy">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
