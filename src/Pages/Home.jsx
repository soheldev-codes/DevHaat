import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import InfoCount from "../Components/InfoCount/InfoCount";
import Products from "../Components/Products/Products";
import GetStarted from "../Components/GetStarted/GetStarted";
import PricingSection from "../Components/PricingSection/PricingSection";
import toast from "react-hot-toast";
import CTASection from "../Components/CTASection/CTASection";

const Home = () => {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  // ➕ Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("🛒 Added to cart! Start building your toolkit.");
  };

  // ❌ Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("🗑️ Item removed from your cart.");
  };

  // 🧹 Clear cart
  const handleCheckout = () => {
    setCart([]);
    toast.success("🎉 Checkout successful! Your cart is now empty.");
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
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
