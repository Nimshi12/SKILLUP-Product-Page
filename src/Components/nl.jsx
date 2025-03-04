import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 w-full text-white">
      <div className="grid md:grid-cols-2 md:mx-8">
        <div className="m-4">
          <h1 className="font-bold text-2xl sm:text-3xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="mt-1">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-1 px-3 h-full bg-white placeholder-gray-500 rounded mb-4 md:mr-4 md:m-0"
              type="email"
              placeholder="Enter Email"
            />
            <div className="flex items-center justify-center">
              <button className="p-2.5 h-full w-50 rounded-md text-black font-medium bg-[#00df9a] hover:bg-[#00bf85] hover:cursor-pointer active:border-[1px]">
                Notify Me
              </button>
            </div>
          </div>
          {/* <p className='text-left'>We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p> */}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
