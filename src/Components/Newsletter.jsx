import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 w-full text-white">
      <div className="grid lg:grid-cols-3 md:mx-8"> 
        <div className="lg:col-span-2 m-4">
          <h1 className="font-bold text-2xl sm:text-3xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="mt-1">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="flex flex-col my-4">
          <div className="w-full h-13 grid lg:grid-cols-2 gap-4 px-3  ">
            <input
              className="p-3 flex w-full bg-white placeholder-gray-500 rounded"
              type="email"
              placeholder="Enter Email"
            />
            <div className="flex items-center justify-center md:justify-self-start">
              <button className="p-2.5 h-full w-50 rounded-md text-black font-medium bg-[#00df9a] hover:bg-[#00bf85] hover:cursor-pointer active:border-[1px]">
                Notify Me
              </button>
            </div>
          </div>
          <p className='text-left mt-20 lg:mt-5 ml-4 mr-16'>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
