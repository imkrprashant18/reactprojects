import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="w-full h-14 bg-indigo-200 flex justify-between
      items-center px-4 md:px-4"
      >
        <div className="text-2xl text-indigo-700 font-bold ">MitX</div>
        <ul className="md:flex  hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 rounded text-white cursor-pointer font-bold">
          Login/Singup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
