import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="md:flex items-center justify-between gap-10 px-4 py-4  md:py-20 container mx-auto">
      <div className="space-y-8 py-8 md:py-0">
        <div className="bg-[#e1e7ff] py-2 px-4 rounded-full w-fit flex items-center">
          <img
            className="w-4 mr-2"
            src="https://i.ibb.co.com/vxCwLwxc/badge.png"
            alt="badge"
          />
          <span className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-base font-bold">
            New: AI-Powered Tools Available
          </span>
        </div>
        <h1 className=" text-4xl md:text-7xl font-extrabold">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-lg">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="space-x-4 flex items-center gap-2">
          <button className="btn-devhaat">Explore Products</button>
          <button className="btn-devhaat-outline">
            <CiPlay1 /> Watch Demo
          </button>
        </div>
      </div>
      <div className="md:max-w-[700px]">
        <img
          className="  rounded-md "
          src="https://i.ibb.co.com/Ps17JN94/devhaat-hero.jpg"
          alt="Devhaat hero bg"
        />
      </div>
    </div>
  );
};

export default Banner;
