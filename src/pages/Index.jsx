import React from "react";
import DoiGioHu from "../assets/images/doigiohu.jpg";

const Index = () => {
  const library = [
    {
      img: { DoiGioHu },
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
    },
    {
      img: { DoiGioHu },
      title: "Đồi gió hú",
      author: "Emily Bronte",
      yearPublication: "2023",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="card" style={{ width: "18rem", backgroundSize: "cover" }}>
        <img
          src={DoiGioHu}
          className="card-img-top"
          alt="..."
          style={{ backgroundSize: "cover", height: "10rem" }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">Đồi gió hú</h5>
          <p className="card-text">Emily Bronte</p>
          <p>2023</p>
          <a href="#" className="btn btn-primary">
            Mua sản phẩm
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
