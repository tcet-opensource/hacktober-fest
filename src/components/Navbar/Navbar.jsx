import React, { useState } from "react";
import logo from "/Navbar/logo.png";
import menu from "/Navbar/menu.svg";
import discord from "/Navbar/discord.svg";
import close1 from "/Navbar/close1.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((p) => !p);

  const navLink = [
    {
      id: 0,
      header: "Home",
      link:"/"
    },
    {
      id: 1,
      header: "Docs",
      link:"/"
    },
    {
      id: 2,
      header: "Achievements",
      link:"/"
    },
    {
      id: 3,
      header: "Projects",
      link:"/"
    },
    {
      id: 4,
      header: "Team",
      link:"/"
    },
  ];
  return (
    <div className="px-6 pt-4 pb-2 flex justify-between text-[#AFAFAF]">
      <div className="flex items-center">
        <img src={logo} className="w-8 h-8" alt="" />
        <p className="text-lg font-medium text-white">TCET OpenSource</p>
      </div>
      {/* ----------full screen---------- */}
      <div className="flex">
        <ul className="items-center hidden md:flex md:gap-2 text-md">
          {navLink.map((step) => (
            <div key={step}>
              <figure>
                <li>
                  <a className="hover:underline hover:text-white" href={step.link}>
                    {step.header}
                  </a>
                </li>
              </figure>
            </div>
          ))}
        </ul>
      </div>
      <div className="hidden md:ml-2 md:flex md:gap-2">
        <button className="px-4 py-2 text-lg border-2 border-gray-500 rounded-xl">
          <div className="flex gap-1.5">
            <img src={discord} alt="" />
            <a href="">Discord</a>
          </div>
        </button>
        <button className="text-lg px-4 py-2 rounded-lg mt-0 bg-[#4C58FE] ">
          <a href="">Register Now</a>
        </button>
      </div>
      {/* ----------tablet---------- */}
      <div className="z-30 items-center md:hidden" onClick={handleClick}>
        <img className="w-8 h-8" src={toggle ? close1 : menu} alt="" />
      </div>
      <ul
        className={
          toggle
            ? "navLinks absolute flex flex-col gap-4 text-md w-full px-8 mt-12 md:hidden"
            : "hidden"
        }
      >
        {navLink.map((step) => (
          <div key={step} className="mt-0">
            <li className="">
              <a href={step.link}>{step.header}</a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
