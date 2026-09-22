import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-xl"
        >
          ☰
        </button>
        {isOpen && (
          <div className="lg:hidden bg-white">
            <ul className="flex flex-col">
              <li className="text-[#D91B7E]">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}

        <div className="w-24 lg:w-40">
          <img src={logo}></img>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-4 justify-between items-center">
            <li className="text-[#D91B7E]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li></li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <button className="py-1 px-1 lg:px-3 rounded-full ">Sign In</button>
          <button className="bg-[#D91B7E] rounded-full py-1 px-1 lg:px-3">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
