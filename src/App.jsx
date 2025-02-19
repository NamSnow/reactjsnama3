import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import "./assets/js/bs5.js";
import Login from "./signs/Login.jsx";
import Register from "./signs/Register.jsx";
import Users from "./signs/Users.jsx";
import ResetPass from "./signs/ResetPass.jsx";
import DetailBook from "./pages/DetailBook.jsx";
import PrivateRoute from "./errors/PrivateRoute.jsx";
import Cart from "./pages/Cart.jsx";

const App = () => {
  const routeApp = [
    { path: "/", element: <Index />, useLayout: true, isPrivate: false },
    {
      path: "/detailbook",
      element: <DetailBook />,
      useLayout: true,
      isPrivate: true,
    },
    {
      path: "/cart",
      element: <Cart />,
      useLayout: true,
      isPrivate: true,
    },
    { path: "/login", element: <Login />, useLayout: false, isPrivate: false },
    {
      path: "/register",
      element: <Register />,
      useLayout: false,
      isPrivate: false,
    },
    { path: "/users", element: <Users />, useLayout: false, isPrivate: false },
    {
      path: "/users/resetpass",
      element: <ResetPass />,
      useLayout: false,
      isPrivate: false,
    },
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
                route.isPrivate ? (
                  <PrivateRoute>
                    {route.useLayout ? (
                      <Layout>{route.element}</Layout>
                    ) : (
                      route.element
                    )}
                  </PrivateRoute>
                ) : route.useLayout ? (
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
