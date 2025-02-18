import React from "react";
import DoiGioHu from "../assets/images/doigiohu.jpg";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  const library = [
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "223",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "203",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "203",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "223",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
    {
      img: DoiGioHu,
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
      quantity: "2023",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Cửa Hàng Sách</h2>
      <div className="row">
        {library.map((item, index) => (
          <div className="col-md-3 mb-4 col-4" key={index}>
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
                  <a href="#" className="btn btn-outline-danger">
                    <FontAwesomeIcon icon={faCartPlus} /> Mua
                  </a>
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
