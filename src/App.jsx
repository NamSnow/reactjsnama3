import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import "./bs5.js";
import Login from "./signs/Login.jsx";
import Register from "./signs/Register.jsx";
import Users from "./signs/Users.jsx";
import ResetPass from "./signs/ResetPass.jsx";

const App = () => {
  const routeApp = [
    { path: "/", element: <Index />, useLayout: true },
    { path: "/login", element: <Login />, useLayout: false },
    { path: "/register", element: <Register />, useLayout: false },
    { path: "/users", element: <Users />, useLayout: false },
    { path: "/resetpass", element: <ResetPass />, useLayout: false },
  ];

  return (
    <Router>
      <Routes>
        {routeApp.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                route.useLayout ? (
                  <Layout>{route.element}</Layout>
                ) : (
                  route.element
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
