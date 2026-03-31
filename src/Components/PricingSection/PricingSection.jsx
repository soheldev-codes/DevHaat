import React from "react";
import { pricingData } from "../../Data/pricingData";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  const handleClick = (plan) => {
    toast.success(`${plan.name} plan selected 🚀`);
  };

  return (
    <section className="py-16  ">
      <h2 className="text-3xl text-center font-bold mb-2"> Pricing Plan</h2>
      <p className="text-base-content/60 mb-10 text-center">
        Choose the plan that fits your needs
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`card shadow-lg transition ${
              plan.highlight
                ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white scale-105"
                : "bg-[#f9fafc]"
            }`}
          >
            <div className="card-body flex flex-col justify-between">
              {plan.highlight && (
                <div className="text-center -mt-8 rounded-full">
                  <span className="px-4 py-2 bg-amber-100 text-orange-700 rounded-full font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="card-title ">{plan.name}</h3>
                <p className="text-sm opacity-80">{plan.description}</p>

                <h1 className="text-4xl font-bold my-4">
                  ${plan.price}
                  <span className="text-lg">/month</span>
                </h1>
              </div>

              <ul className="text-sm space-y-2 mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    {" "}
                    <FaCheck /> {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(plan)}
                className={`btn rounded-full   ${
                  plan.highlight
                    ? "bg-white text-purple-600"
                    : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
