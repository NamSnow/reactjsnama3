import React from "react";
import { useLocation } from "react-router-dom";

const DetailBook = () => {
  const location = useLocation();
  const library = location.state;

  if (!library) {
    return <div className="container">Không có dữ liệu sách</div>;
  }

  return (
    <div className="container">
      <h2>Thông tin chi tiết sản phẩm</h2>
      <div>{library.title}</div>
    </div>
  );
};

export default DetailBook;
