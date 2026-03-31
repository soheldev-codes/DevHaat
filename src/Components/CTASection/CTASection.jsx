import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-center">
      <div className=" mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg opacity-90 mb-8">
          Join thousands of professionals using digital tools to work smarter.
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="btn bg-white text-purple-600 border-none rounded-full px-6 hover:scale-105 transition">
            Explore Products
          </button>

          <button className="btn btn-outline border-white text-white rounded-full px-6 hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

        <p className="text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
