import React, { useEffect, useState } from "react";
import DoiGioHu from "../assets/images/doigiohu.jpg";
import RomeoandJuliet from "../assets/images/romeo&juliet.jpg";
import PrideandPrejudice from "../assets/images/PrideandPrejudice.jpeg";
import GoneWithTheWind from "../assets/images/GoneWithTheWind.jpg";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/Index.css";
import { Link } from "react-router-dom";

const generateBooks = () => {
  return [
    {
      id: crypto.randomUUID(),
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      id: crypto.randomUUID(),
      img: GoneWithTheWind,
      title: "Gone With The Wind",
      author: "Margaret Mitchell",
      yearPublication: "1936",
      quantity: "2023",
    },
    {
      id: crypto.randomUUID(),
      img: PrideandPrejudice,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      yearPublication: "1813",
      quantity: "2023",
    },
    {
      id: crypto.randomUUID(),
      img: RomeoandJuliet,
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      yearPublication: "1813",
      quantity: "2023",
    },
  ];
};

const Index = () => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem("library");
    if (storedBooks) {
      setLibrary(JSON.parse(storedBooks)); // Lấy dữ liệu từ localStorage nếu có
    } else {
      const books = generateBooks(); // Tạo danh sách mới nếu chưa có
      setLibrary(books);
      localStorage.setItem("library", JSON.stringify(books)); // Lưu vào localStorage
    }
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Cửa Hàng Sách</h2>
      <div className="row">
        {library.map((item) => (
          <div className="col-md-3 mb-4 col-4" key={item.id}>
            <div className="product-card">
              <img src={item.img} className="product-image" alt={item.title} />
              <div className="product-body">
                <h5 className="product-title">{item.title}</h5>
                <p className="product-author">Tác giả: {item.author}</p>
                <div className="product-buttons">
                  <Link
                    to="/detailbook"
                    state={item}
                    className="btn btn-outline-primary"
                  >
                    <FontAwesomeIcon icon={faEye} /> Xem
                  </Link>
                  <Link
                    to={`/cart/?id=${item.id}`}
                    className="btn btn-outline-danger"
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> Mua
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
