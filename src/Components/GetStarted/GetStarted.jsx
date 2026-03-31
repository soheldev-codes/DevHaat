import React from "react";
import { FaUser, FaBox, FaRocket } from "react-icons/fa";
const GetStarted = () => {
  const stepsData = [
    {
      id: 1,
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required.",
      icon: "user",
    },
    {
      id: 2,
      title: "Choose Products",
      description: "Browse and select tools that fit your needs.",
      icon: "box",
    },
    {
      id: 3,
      title: "Start Creating",
      description: "Download and start using tools instantly.",
      icon: "rocket",
    },
  ];

  const iconMap = {
    user: <FaUser />,
    box: <FaBox />,
    rocket: <FaRocket />,
  };

  return (
    <section className="py-16 bg-[#f9fafc] text-center">
      <h2 className="text-3xl font-bold mb-2">Get Started In 3 Steps</h2>
      <p className="text-base-content/60 mb-10">
        Start using premium tools in minutes
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="card border border-gray-200  shadow-md "
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mb-4">
                {iconMap[step.icon]}
              </div>

              <h3 className="card-title">{step.title}</h3>
              <p className="text-sm text-base-content/60">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
