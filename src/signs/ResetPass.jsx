import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const storedUser = location.state || {};

  const [pass, setPass] = useState("");
  const [showForm2, setShowForm2] = useState(false);

  const handleConfirm = (e) => {
    e.preventDefault();
    setShowForm2(true);
  };

  const handleBack = () => {
    setShowForm2(false);
  };

  const handleSubCode = () => {
    if (!pass) {
      alert("Nhập mật khẩu để tiếp tục");
      return;
    }

    const existingPasss = JSON.parse(localStorage.getItem("users"));

    const updatedPasss = existingPasss.map((user) =>
      user.email === storedUser.email ? { ...user, pass } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedPasss));
    alert("Đổi mật khẩu thành công");
    navigate("/users");
  };

  return (
    <div className="vh-100  bg-dark">
      <div className="card p-4 bg-dark text-white">
        <h3 className="text-center mb-4">Reset Password</h3>

        {/* Form xác nhận email */}
        {!showForm2 && (
          <form onSubmit={handleConfirm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address hiện tại
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={storedUser.email || ""}
                readOnly
              />
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Xác nhận
            </button>
          </form>
        )}

        {/* Form đặt lại mật khẩu */}
        {showForm2 && (
          <form>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Nhập mật khẩu mới
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleBack}
              >
                Quay lại
              </button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubCode}
              >
                Cập nhật mật khẩu
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPass;
