import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the mini e-commerce app.</p>
      <p>Login status: {isLoggedIn ? "Logged In" : "Not Logged In"}</p>
    </div>
  );
};

export default Home;