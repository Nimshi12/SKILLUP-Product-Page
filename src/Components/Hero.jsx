import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen flex flex-col m-auto text-center text-white justify-center items-center">
      <div>
      <div>
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="sm:text-6xl md:text-7xl text-4xl font-bold p-2">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center">
          <p className="font-bold sm:text-1xl md:text-3xl text-xl p-2">
            Fast, flexible financing for
          </p>
          <ReactTyped 
          className="font-bold sm:text-1xl md:text-3xl text-xl"
            strings={["BTB", "BTC", "SASS"]}    
            typeSpeed={100}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500 p-2">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
      </div>
      <div>
        <button className=" p-2.5 w-52 rounded-md text-[black] font-medium mt-4 bg-[#00df9a] hover:bg-[#00b27b] hover:cursor-pointer active:border-1" >Get Started</button>
      </div>
      </div>
    </div>
  );
};

export default Hero;
