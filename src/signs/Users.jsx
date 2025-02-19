import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [emailToDelete, setEmailToDelete] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem("users")) || [];

  const handleDeleteAccount = () => {
    if (!emailToDelete) return;

    let accounts = JSON.parse(localStorage.getItem("users"));
    const updatedAccounts = accounts.filter(
      (account) => account.email !== emailToDelete
    );
    localStorage.setItem("users", JSON.stringify(updatedAccounts));

    alert(`Tài khoản ${emailToDelete} xóa thành công `);

    setEmailToDelete(null);

    window.location.reload();
  };

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {storedUser.length > 0 ? (
            storedUser.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <a
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setEmailToDelete(item.email)}
                  >
                    Xóa
                  </a>
                  <Link
                    to="/users/resetpass"
                    state={item}
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                  >
                    Quên mật khẩu
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                Không có thông tin
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Thông báo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {emailToDelete
                ? `Tài khoản ${emailToDelete} sẽ bị xóa vĩnh viễn. Xóa chứ?`
                : `Không có tài khoản đc chọn. `}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDeleteAccount}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
