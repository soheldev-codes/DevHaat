import React, { use } from "react";

const Product = ({ productsPromise, addToCart }) => {
  const products = use(productsPromise);
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4 ">
      {products.map((p) => (
        <div
          key={p.id}
          className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center justify-between gap-2 mt-3">
            <span className="text-2xl border rounded-full p-2 border-gray-300">
              {p.icon}
            </span>
            <div className="-mt-12">
              <span className="text-xs text-right bg-yellow-100 text-yellow-600 px-3 py-1  rounded-full">
                {p.tag}
              </span>
            </div>
          </div>
          {/* Tag */}

          {/* Title */}
          <h2 className="text-xl font-bold mt-3">{p.name}</h2>
          <p className="text-gray-500 text-sm mt-2">{p.description}</p>

          {/* Price */}
          <p className="mt-3 text-lg font-semibold">
            ${p.price}{" "}
            <span className="text-sm text-gray-400">/{p.period}</span>
          </p>

          {/* Features */}
          <ul className="mt-3 space-y-1 text-sm">
            {p.features.map((f, i) => (
              <li key={i} className="text-gray-600">
                ✔ {f}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            onClick={() => addToCart(p)}
            className="mt-5 cursor-pointer font-semibold w-full py-2 rounded-full text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
