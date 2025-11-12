import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppWrapper from "./context/AppWrapper";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useSelector, useDispatch } from "react-redux";
import  Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

const App = () => {
  const countValue= useSelector((state)=>state.count)
  const theme = useSelector((state)=>state.theme)
  const dispatch = useDispatch()
  return (
    <div className={theme === "light" ? "bg-white text-dark min-vh-100 p-3" : "bg-dark text-light min-vh-100 p-3"}>
     
          <Button variant="outline-secondary" onClick={()=>dispatch({type:"TOGGLE_THEME"})}>
            Toggle Theme ({theme})
          </Button>
          <br/>
          <br/>
          <Button variant= "danger" onClick={()=>dispatch({type:"DECREMENT"})}>-</Button>
          <h1 className="mb-0">{countValue}</h1>
          <Button variant = "success" onClick={()=>dispatch({type:"INCREMENT"})}>+</Button>
       

     {/* <BrowserRouter>
      <AppWrapper>
        <div className="max-width-900 mx-auto p-3">
       <Nav />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/products" element={<Products />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="*" element={<NotFound />} />
           </Routes>
         </div>
       </AppWrapper>
     </BrowserRouter> */}
    </div>
  );
};

export default App;