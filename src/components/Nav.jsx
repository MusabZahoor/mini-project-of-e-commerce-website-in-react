import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Nav = () => {
  const { isLoggedIn, login, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isLoggedIn) {
      logout();
      navigate("/");
    } else {
      login();
      navigate("/products");
    }
  };

  return (
    <nav style={{ padding: 10, borderBottom: "1px solid #ccc", marginBottom: 10 }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/products" style={{ marginRight: 10 }}>Products</Link>
      <Link to="/cart" style={{ marginRight: 10 }}>Cart</Link>
      <button onClick={handleAuth} style={{ float: "right" }}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Nav;