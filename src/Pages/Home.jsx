import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import InfoCount from "../Components/InfoCount/InfoCount";
import Products from "../Components/Products/Products";
import GetStarted from "../Components/GetStarted/GetStarted";

const Home = () => {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  // ➕ Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ❌ Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 🧹 Clear cart
  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <InfoCount />
      <Products
        view={view}
        setView={setView}
        cart={cart}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
        addToCart={addToCart}
      />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
