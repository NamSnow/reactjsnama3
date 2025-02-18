import React from "react";
import { useLocation } from "react-router-dom";

const DetailBook = () => {
  const location = useLocation();
  const library = location.state;

  if (!library) {
    return (
      <div className="container mx-auto text-center py-10 text-gray-600">
        Không có dữ liệu sách
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hình ảnh sản phẩm */}
        <div className="relative">
          <img
            src={library.img}
            alt={library.title}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>

        {/* Thông tin chi tiết */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{library.title}</h1>
          <p className="text-gray-600 text-sm">Tác giả: {library.author}</p>
          <p className="text-gray-600 text-sm">
            Năm xuất bản: {library.yearPublication}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Số lượng còn lại: {library.quantity}
          </p>

          {/* Giá tiền */}
          <div className="mt-4 text-red-600 text-2xl font-bold">₫120.000</div>
          <div className="text-gray-500 line-through text-sm">₫150.000</div>

          {/* Nút mua hàng */}
          <div className="mt-4 flex gap-4">
            <button className="flex-1 py-2 px-4 border border-red-500 text-red-500 rounded-lg hover:bg-red-100 transition">
              Thêm vào giỏ hàng
            </button>
            <button className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
