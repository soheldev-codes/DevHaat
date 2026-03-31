import React from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const getProducts = () => {
  return fetch("/products.json").then((res) => res.json());
};

const productsPromise = getProducts();

const Products = ({
  view,
  setView,
  cart,
  removeFromCart,
  handleCheckout,
  addToCart,
}) => {
  return (
    <div className="py-20">
      {/* 🔥 TITLE */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* 🔘 TOGGLE BUTTON */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 p-1 rounded-full flex">
          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              view === "products"
                ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md"
                : "text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              view === "cart"
                ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md"
                : "text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>
      {/*  */}

      {/* 🔄 CONDITIONAL RENDER */}
      <div className="container mx-auto">
        {view === "products" ? (
          <Product addToCart={addToCart} productsPromise={productsPromise} />
        ) : (
          <Cart
            cart={cart}
            handleCheckout={handleCheckout}
            removeFromCart={removeFromCart}
            setView={setView}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
