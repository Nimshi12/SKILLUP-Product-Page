import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const onMenuClick = () =>
        setIsNavOpen(!isNavOpen);

  return (
    <div className="text-white flex justify-between items-center h-1/10 mx-auto px-4">
      <h1 className="W-FULL text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="md:flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={onMenuClick} className="md:hidden">
        {!isNavOpen ? <MdClose size={20} /> : <LuMenu size={20} />} 
      </div>
        <div className={isNavOpen ? 'fixed h-full w-[60%] bg-[#000300] left-0 top-0 border-r border-r-gray-900 ease-in-out duration-500 md:hidden' : 'ease-out duration-900 fixed left-[-100%]'}>
          <h1 className="W-FULL text-3xl font-bold text-[#00df9a] p-4">
            REACT.
          </h1>
          <li className="p-4 list-none border-b border-b-gray-600 uppercase py-5 text-sm">
            Home
          </li>
          <li className="p-4 list-none border-b border-b-gray-600 uppercase py-5 text-sm">
            Company
          </li>
          <li className="p-4 list-none border-b border-b-gray-600 uppercase py-5 text-sm">
            Resources
          </li>
          <li className="p-4 list-none border-b border-b-gray-600 uppercase py-5 text-sm">
            About
          </li>
          <li className="p-4 list-none border-b border-b-gray-600 uppercase py-5 text-sm">
            Contact
          </li>
        </div>
    </div>
  );
};

export default NavBar;
