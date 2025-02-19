import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const itemUser = storedUsers.find(
      (user) => user.email === email && user.pass === pass
    );

    if (!itemUser) {
      alert("Vui lòng đăng nhập lại");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(itemUser));
      alert("Đăng nhập thành công");
      navigate("/");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
      <form
        className="p-4 bg-dark rounded"
        style={{
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0px 0px 15px #fff",
        }}
        onSubmit={handleLogin}
      >
        <a href="/">Quay lại</a>
        <h2 className="text-center mb-4">ĐĂNG NHẬP TÀI KHOẢN</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="text-center mb-3">
          Chưa có tài khoản?{" "}
          <a
            href="/register"
            style={{ textDecoration: "none", color: "#0d6efd" }}
          >
            Đăng ký ngay.
          </a>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
