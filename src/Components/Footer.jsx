import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="grid lg:grid-cols-2 lg:gap-[200px] text-white m-5 lg:my-20">
      <div className="lg:ml-34">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="my-4">
          Join us in redefining the future of data-driven success. Ready to take
          the next step? Let's grow together.
        </p>
        <div className="flex gap-8 my-8">
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className="flex text-gray-400 text-sm gap-5 justify-between mb-14 mt-6 lg:m-0 lg:mr-24 lg:mb-20">
        <ul className="list-none leading-8 lg:text-[16px]">
            <li className="font-semibold">Solutions</li>
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
        </ul>
        <ul className="list-none leading-8 lg:text-[16px]">
            <li className="font-semibold">Support</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
        </ul>
        <ul className="list-none leading-8 lg:text-[16px]">
            <li className="font-semibold">Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Careers</li>
        </ul>
        <ul className="list-none leading-8 lg:text-[16px]">
            <li className="font-semibold">Legal</li>
            <li>Claim</li>
            <li>Policy</li>
            <li>Terms</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
