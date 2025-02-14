import React from "react";

const NavbarLinks = () => {
  const links = [
    { label: "Book" },
    { label: "Navigate" },
    { label: "Stats" },
    { label: "Idea" },
    { label: "Career" },
  ];

  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <ul className="d-flex m-0 list-unstyled">
      {links.map((link, index) => (
        <li key={index} className="nav-item iconChange me-4 pt-2">
          <a href="#" className="nav-link text-center p-0">
            <div className="d-flex align-items-center changeWidth mx-auto">
              <span className="iconHeight mx-2">{link.label}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <>
      <nav className="navbar align-items-center border-bottom">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a href="#" className="navbar-brand m-0 textColor fw-bold brand">
              DBook
            </a>
            <div
              id="verticalbar"
              className="mx-xxl-2 mx-1 d-none d-lg-inline-block"
            ></div>
            <a
              href="#"
              className="nav-link textColor fw-lighter lh-sm brandSubHeading d-none d-lg-inline-block"
            >
              Visitor
              <br />
              <span className="fw-medium brandSubHeading d-none d-lg-inline-block">
                Management
              </span>
            </a>
            <div className="position-relative ms-4 d-none d-xl-inline-block">
              <input
                className="searchInput bg-body-tertiary iconCursor ps-md-5 p-1 p-md-2"
                type="search"
                placeholder="Search Rides"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-none d-lg-block">
              <NavbarLinks />
            </div>
            <div
              id="iconContainer"
              className="d-flex justify-content-center align-items-center rounded-5 bg-light d-xl-none"
            >
              <span className="iconHeight">Search</span>
            </div>
            <button
              id="hostBtn"
              className="btn btn-sm m-sm-2 m-1 text-white a rounded-5 px-3 d-none d-lg-inline-block"
            >
              Post
            </button>
            <a
              id="loginBtn"
              href="/login"
              className="btn btn-sm m-sm-2 m-1 bg-primary text-white rounded-5 px-sm-3 px-2"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav id="secondNav" className="bottom-0 position-fixed end-0 start-0">
        <div className="d-lg-none">
          <div className="container-fluid d-flex justify-content-between shadow pt-2">
            <a href="#" className="text-center text-decoration-none textColor">
              <div className="mb-1">DB</div>
              <div className="extraSmallFont active pb-1">Dbook</div>
            </a>
            {["Book", "Navigate", "Stats", "Idea", "Career"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-decoration-none textColor text-center"
                >
                  <div className="extraSmallFont pb-1">{item}</div>
                </a>
              )
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
