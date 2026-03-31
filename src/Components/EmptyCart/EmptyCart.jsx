import { FaShoppingCart } from "react-icons/fa";

export default function EmptyCart({ setView }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] p-6 rounded-full shadow-lg">
        <FaShoppingCart className="text-white text-4xl" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-6">Your Cart is Empty</h2>

      {/* Description */}
      <p className="text-gray-500 mt-3 max-w-md">
        Looks like you haven't added any products yet. Start exploring our
        premium tools and boost your productivity.
      </p>

      {/* Button */}
      <button
        onClick={() => setView("products")}
        className="mt-6 px-6 py-3  cursor-pointer rounded-full text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa] shadow-md hover:scale-105 transition"
      >
        Browse Products
      </button>
    </div>
  );
}
