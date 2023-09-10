import React, { useState } from "react";
import logo from "/Navbar/logo.png";
import menu from "/Navbar/menu.svg";
import close from "/Navbar/close.svg";
import discord from "/Navbar/discord.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((p) => !p);

  const navLink = [
    {
      id: 0,
      header: "Home",
    },
    {
      id: 1,
      header: "Docs",
    },
    {
      id: 2,
      header: "Achievements",
    },
    {
      id: 3,
      header: "Projects",
    },
    {
      id: 4,
      header: "Team",
    },
  ];
  return (
    <div className="px-6 pt-4 pb-2 flex justify-between text-white">
      <div className="flex items-center">
        <img src={logo} className="h-8 w-8" alt="" />
        <p className="text-sm ">TCET OpenSource</p>
      </div>
      {/* ----------full screen---------- */}
      <div className="flex">
        <ul className="hidden lg:flex lg:gap-6 divide-y-reverse divide-inherit > * + * hover:divide-y-1 text-sm items-center">
          {navLink.map((step) => (
            <div key={step}>
              <figure>
                <li>
                  <a className="hover:underline" href="/">
                    {step.header}
                  </a>
                </li>
              </figure>
            </div>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex lg:gap-2">
        <button className="rounded-xl px-4 py-2 border-2 border-gray-500 text-lg">
          <div className="flex gap-1.5">
            <img src={discord} alt="" />
            <a href="">Discord</a>
          </div>
        </button>
        <button className="text-lg  px-4 py-2 rounded-lg mt-0 bg-indigo-500">
          <a href="">Register Now</a>
        </button>
      </div>
      {/* ----------tablet---------- */}
      <div className="z-30 lg:hidden items-center" onClick={handleClick}>
        <img className="h-8 w-8" src={toggle ? close : menu} alt="" />
      </div>
      <ul
        className={
          toggle
            ? "navLinks absolute flex flex-col gap-4 text-lg w-full px-8 mt-8 lg:hidden"
            : "hidden"
        }
      >
        {navLink.map((step) => (
          <div key={step} className="mt-0">
            <li className="">
              <a href="/">{step.header}</a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
