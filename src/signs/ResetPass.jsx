import React from "react";

const ResetPass = () => {
  return (
    <div className="bg-black text-white vh-100">
      <form action="" className="container">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label mt-4">
            Nhập email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default ResetPass;
