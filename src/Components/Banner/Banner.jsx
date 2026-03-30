import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="md:flex items-center justify-between px-4 py-20 container mx-auto">
      <div className="space-y-4">
        <div className="badge badge-soft badge-success">
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-7xl font-extrabold">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-lg">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="space-x-4">
          <button className="btn btn-soft btn-primary">Explore Products</button>
          <button className="btn btn-outline btn-primary">
            <CiPlay1 /> Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img
          className=" max-w-[700px] rounded-md "
          src="https://i.ibb.co.com/Ps17JN94/devhaat-hero.jpg"
          alt="Devhaat hero bg"
        />
      </div>
    </div>
  );
};

export default Banner;
