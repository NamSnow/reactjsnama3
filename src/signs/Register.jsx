import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [reenterPass, setReenterPass] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const validatePass = (pass) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return regex.test(pass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !pass || !reenterPass) {
      alert("Điền đầy đủ thông tin");
    } else if (pass !== reenterPass) {
      alert("Mật khẩu không khớp");
    }
    // else if (!validateEmail(email)) {
    //   alert("Định dạng email không đúng (chỉ chấp nhận @gmail.com)");
    // }
    //  else if (!validatePass(pass)) {
    //   alert(
    //     "Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và ký tự đặc biệt"
    //   );
    // }
    else {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Kiểm tra email đã tồn tại
      const isEmailExist = existingUsers.some((user) => user.email === email);
      if (isEmailExist) {
        alert("Email đã tồn tại");
        return;
      }

      const newUser = { name, email, pass };
      existingUsers.push(newUser);

      localStorage.setItem("users", JSON.stringify(existingUsers));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      alert("Đăng ký thành công");
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
        onSubmit={handleRegister}
      >
        <h2 className="text-center mb-4">ĐĂNG KÝ TÀI KHOẢN</h2>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputResetPassword" className="form-label">
            Reset Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputResetPassword"
            name="reenterPass"
            onChange={(e) => setReenterPass(e.target.value)}
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
          Đã có tài khoản?{" "}
          <a href="/login" style={{ textDecoration: "none", color: "#0d6efd" }}>
            Đăng nhập ngay.
          </a>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
