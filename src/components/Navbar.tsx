import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center p-2">
        <div>
          <img src={logo}></img>
        </div>

        <div>
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
          <button className="py-1 px-3 rounded-full ">Sign In</button>
          <button className="bg-[#D91B7E] rounded-full py-1 px-3">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;

// import { useState } from "react";

// const Navbar = ({ logo }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
//       <div className="w-11/12 max-w-7xl mx-auto">
//         <div className="flex items-center justify-between py-3">
//           {/* Logo */}
//           <div className="shrink-0">
//             <img src={logo} alt="Logo" className="h-10 w-auto" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-8">
//               <li>
//                 <a href="#home" className="hover:text-[#7C3AED] transition">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#technologies"
//                   className="hover:text-[#7C3AED] transition"
//                 >
//                   Technologies
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="hover:text-[#7C3AED] transition">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:text-[#7C3AED] transition">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-[#7C3AED] transition">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <button className="py-2 px-5 rounded-full hover:bg-gray-100 transition">
//               Sign In
//             </button>

//             <button className="py-2 px-5 rounded-full text-white bg-linear-to-r from-[#FF5722] to-[#7C3AED] hover:opacity-90 transition">
//               Sign Up
//             </button>
//           </div>

//           {/* Mobile/Tablet Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden flex flex-col gap-1.5 p-2"
//             aria-label="Toggle menu"
//           >
//             <span className="block w-6 h-0.5 bg-gray-800"></span>
//             <span className="block w-6 h-0.5 bg-gray-800"></span>
//             <span className="block w-6 h-0.5 bg-gray-800"></span>
//           </button>
//         </div>

//         {/* Mobile/Tablet Menu */}
//         {menuOpen && (
//           <div className="lg:hidden border-t border-gray-200 py-4">
//             <ul className="flex flex-col gap-4">
//               <li>
//                 <a
//                   href="#home"
//                   onClick={() => setMenuOpen(false)}
//                   className="block hover:text-[#7C3AED]"
//                 >
//                   Home
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#technologies"
//                   onClick={() => setMenuOpen(false)}
//                   className="block hover:text-[#7C3AED]"
//                 >
//                   Technologies
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#projects"
//                   onClick={() => setMenuOpen(false)}
//                   className="block hover:text-[#7C3AED]"
//                 >
//                   Projects
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#about"
//                   onClick={() => setMenuOpen(false)}
//                   className="block hover:text-[#7C3AED]"
//                 >
//                   About
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#contact"
//                   onClick={() => setMenuOpen(false)}
//                   className="block hover:text-[#7C3AED]"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>

//             {/* Mobile Buttons */}
//             <div className="flex gap-3 mt-5">
//               <button className="flex-1 py-2 px-4 rounded-full border border-gray-300">
//                 Sign In
//               </button>

//               <button className="flex-1 py-2 px-4 rounded-full text-white bg-linear-to-r from-[#FF5722] to-[#7C3AED]">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

export default Navbar;
