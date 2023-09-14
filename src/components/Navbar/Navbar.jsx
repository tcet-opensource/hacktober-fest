import React, { useState } from "react";
import logo from "/Navbar/logo.png";
import menu from "/Navbar/menu.svg";
import discord from "/Navbar/discord.svg";
import close1 from "/Navbar/close1.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((prevToggle) => !prevToggle);

  const closeMenu = () => setToggle(false);

  const navLink = [
    {
      id: 0,
      header: "Home",
      link: "/",
    },
    {
      id: 1,
      header: "Docs",
      link: "/",
    },
    {
      id: 2,
      header: "Achievements",
      link: "/",
    },
    {
      id: 3,
      header: "Projects",
      link: "/",
    },
    {
      id: 4,
      header: "Team",
      link: "/",
    },
  ];

  return (
    <div className="relative px-6 pt-4 pb-2 flex justify-between text-[#AFAFAF]">
      <div className="flex items-center">
        <img src={logo} className="h-8 w-8" alt="" />
        <p className="text-lg font-medium text-white">TCET OpenSource</p>
      </div>

      {/* ----------full screen---------- */}
      <div className="flex">
        <ul className="hidden md:flex md:gap-2 text-md items-center">
          {navLink.map((step) => (
            <div key={step.id}>
              <li>
                <a className="hover:underline hover:text-white" href={step.link}>
                  {step.header}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="hidden md:ml-2 md:flex md:gap-2">
        <button className="rounded-xl px-4 py-2 border-2 border-gray-500 text-lg">
          <div className="flex gap-1.5">
            <img src={discord} alt="" />
            <a href="#">Discord</a>
          </div>
        </button>
        <button className="text-lg px-4 py-2 text-white rounded-lg mt-0 bg-[#4C58FE]">
          <a href="#">Register Now</a>
        </button>
      </div>

      {/* ----------tablet---------- */}
      <div className="z-30 md:hidden items-center" onClick={handleClick}>
        <img className="h-8 w-8" src={toggle ? close1 : menu} alt="" />
      </div>

      {toggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <ul className="navLinks absolute flex flex-col gap-4 text-md">
            {navLink.map((step) => (
              <div key={step.id} className="mt-0">
                <li className="">
                  <a href={step.link} onClick={closeMenu}>
                    {step.header}
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
