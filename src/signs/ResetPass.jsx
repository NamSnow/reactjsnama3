import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ResetPass = () => {
  const location = useLocation();
  const storedUser = location.state || [];

  const [pass, setPass] = useState("");
  const [showForm2, setShowForm2] = useState(false);

  const handleConfirm = (e) => {
    e.preventDefault();
    setShowForm2(true);
  };

  return (
    <div className="bg-black text-white vh-100">
      {/* form email */}

      {!showForm2 && (
        <form action="" className="container" onSubmit={handleConfirm}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label mt-4">
              Email address hiện tại
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={storedUser.email || []}
              readOnly
            ></input>
          </div>
          <button className="btn btn-danger ">Xác nhận</button>
        </form>
      )}

      {/* form resetpass */}
      {showForm2 && (
        <form action="" className="container">
          <div class="mb-3">
            <label for="exampleInputPassword1" className="form-labelr mt-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <button>Quay lại</button>
        </form>
      )}
    </div>
  );
};

export default ResetPass;
