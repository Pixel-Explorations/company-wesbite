import React from "react";

function Navbar() {
  return (
    <nav className="py-4 fixed w-full top-0 z-10">
      <div className="mx-auto px-4 flex items-center">
        <div className="flex-1 flex items-center">
          <img src={require("../images/PE_Logo.png")} alt="Pixel Explorations Logo" className="h-12 w-12 mr-4" />
        </div>

        <ul className="flex space-x-4 text-gray-300 text-sm ml-auto">
          <li>
            <a href="#" className="text-white hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
