import React from "react";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = ({ setView, cart, removeFromCart, handleCheckout }) => {
  if (cart.length === 0) {
    return <EmptyCart setView={setView} />;
  }

  // 💰 Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border border-gray-300 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-5">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-pink-500 text-sm cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between mt-6 font-semibold">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      {/* Checkout */}
      <button
        onClick={handleCheckout}
        className="mt-6 w-full cursor-pointer py-3 rounded-full text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
