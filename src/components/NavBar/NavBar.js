import React from "react";
import { NavData } from "@/config/content/NavData";

const NavBar = () => {
  return (
    <nav className="navbar px-8 py-6 bg-teal-600">
      <ul className="flex flex-row justify-between mx-8">
        {NavData.map((item, index) => (
          <a
            key={index}
            className="px-6 py-2 bg-teal-700 rounded-lg hover:bg-teal-100 hover:text-cyan-800"
            href={item.url}
          >
            {item.text}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
