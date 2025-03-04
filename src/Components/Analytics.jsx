import React from "react";
import analyticsImg from "../assets/analyticsImg.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1240px] grid sm:grid-cols-2 mx-auto py-14">
          <img className="w-[500px] m-auto" src={analyticsImg} alt="/" />
        <div className="m-4 mx-6 flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h2 className="font-bold text-2xl sm:text-4xl my-2 sm:my-3">Manage Data Analytics Centrally</h2>
          <p>
            Gain deep insights and make data-driven decisions with ease. Monitor
            key metrics, track trends, and visualize performance—all in one place.
            Simplify analytics and unlock the power of your data effortlessly.
          </p>
          <div>
          <button className="p-2.5 w-52 rounded-md text-[#00df9a] font-medium mt-4 bg-[black] hover:bg-[#] hover:cursor-pointer active:border-1 mb-2" >Get Started</button>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default Analytics;
