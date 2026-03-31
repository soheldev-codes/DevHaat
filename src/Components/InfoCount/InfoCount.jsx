import React from "react";

const InfoCount = () => {
  return (
    <section className="bg-devhaat ">
      <div className="container mx-auto  py-20 px-4 text-white">
        <div className="flex flex-col items-center space-y-8 md:flex-row  justify-around">
          <div className="md:px-30 px-6">
            <h2 className="text-6xl font-bold pb-2">50K+</h2>
            <p className="text-2xl">Active Users</p>
          </div>
          <div className="border-r-2 border-l-2 md:px-30 px-6">
            <h2 className="text-6xl font-bold pb-2">200+</h2>
            <p className="text-2xl">Premium Tools</p>
          </div>
          <div className="md:px-30 px-6">
            <h2 className="text-6xl font-bold pb-2">4.9</h2>
            <p className="text-2xl">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCount;
