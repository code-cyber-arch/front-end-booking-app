import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="flex items-center justify-between p-4 w-full absolute">
      <div className="z-20 text-2xl font-bold text-blue-300 drop-shadow-2xl">
        Experiences
      </div>
      <HiMenuAlt3
        onClick={handleNav}
        size={25}
        className="text-white z-20 cursor-pointer"
      />
      <div
        className={
          nav
            ? " fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col z-10 ease-in-out duration-500"
            : "absolute top-0 h-screen left-[-100%] ease-in-out duration-500"
        }
      >
        <ul className="flex flex-col w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destination</li>
          <li className="font-bold text-3xl p-8">Reservations</li>
          <li className="font-bold text-3xl p-8">Amenities</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
