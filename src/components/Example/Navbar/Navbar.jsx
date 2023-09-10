import React, { useState } from "react";
import logo from "/Navbar/logo.png";
import menu from "/Navbar/menu.svg";
import close from "/Navbar/close.svg";
import discord from "/Navbar/discord.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(p=>!p);
  return (
    <div className="px-6 pt-4 pb-2 flex justify-between text-white">
      <div className="flex items-center">
        <img src={logo} className="h-8 w-8" alt="" />
        <p className="text-sm ">TCET OpenSource</p>
      </div>
      {/* ----------full screen---------- */}
      <div className="flex">
        <ul className="hidden lg:flex lg:gap-6 divide-y-reverse divide-inherit > * + * hover:divide-y-1 text-sm items-center">
          <div className="">
            <figure>
              <li>
                <a href="/">Home</a>
              </li>
            </figure>
          </div>
          <div className="">
            <figure>
              <li>
                <a href="/achievements">Achievements</a>
              </li>
            </figure>
          </div>
          <div className="">
            <figure>
              <li>
                <a href="/students">Students</a>
              </li>
            </figure>
          </div>
          <div className="">
            <figure>
              <li>
                <a href="/opportunities">Opportunities</a>
              </li>
            </figure>
          </div>
          <div className="">
            <figure>
              <li>
                <a href="/resources">Resources</a>
              </li>
            </figure>
          </div>
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
      <div className="lg:hidden items-center" onClick={handleClick}>
        <img className="h-8 w-8" src={toggle ? close : menu} alt="" />
      </div>
      <ul
        className={
          toggle
            ? "navLinks absolute flex flex-col gap-8 text-lg w-full px-8 lg:hidden"
            : "hidden"
        }
      >
        <li className="mt-8 ml-2">
          <a href="/">Home</a>
        </li>
        <li className="ml-2">
          <a href="/achievements">Docs</a>
        </li>
        <li className="ml-2">
          <a href="/students">Achievements</a>
        </li>
        <li className="ml-2">
          <a href="/opportunities">Projects</a>
        </li>
        <li className="ml-2">
          <a href="/resources">Team</a>
        </li>
      </ul>
    </div>
  );
}
