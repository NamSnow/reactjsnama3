import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      alert("Bạn chưa nhập email hoặc pass");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const itemUser = storedUsers.find(
      (user) => user.email === email && user.pass === pass
    );

    if (!itemUser) {
      alert("Email chx đăng ký");
    } else if (!itemUser.pass !== pass) {
      alert("Mật khẩu chưa chính xác");
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
            Chấp nhận điều khoản của chúng tôi
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

        <div style={{ textAlign: "center" }} className="mt-4">
          Hoặc đăng nhập bằng
        </div>

        <div className="d-flex justify-content-evenly mt-4">
          <Link>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "blue", height: "30px" }}
            />
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ color: "red", height: "30px" }}
            />
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "orange", height: "30px" }}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
