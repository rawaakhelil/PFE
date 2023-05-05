import "./navbar.css";
import React, { useContext } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch, BsMoonStars, BsBell } from "react-icons/bs";
import { GiExpand } from "react-icons/gi";
import { BiUser } from "react-icons/bi";

import logo from "../../Assets/Images/logo.png";
import { GeneralContext } from "../../hooks/context/GeneralContext";

const Navbar = () => {
  const { menuOpen, setMenuOpen} = useContext(GeneralContext);
  return (
    <div className="navbar bg-white h-full flex flex-row items-center px-6 py-2 shadow-lg">
      <div className="navbar__leflside  flex w-1/3 flex-row items-center gap-20 ml-20 ">
        <div className="navbar__leflside-menuicon text-3xl cursor-pointer text-blue-900"

        >
          <button onClick={()=> setMenuOpen(!menuOpen)}>
          <AiOutlineMenu />
          </button>
        </div>
        <div className="navbar__search flex flex-row items-center rounded-full bg-gray-100 border-gray-100  text-blue-900 px-1  ">
          <input
            type="search"
            placeholder="Search..."
            className="text-lg rounded-full h-10 w-64 bg-gray-100 border-gray-100 text-blue-900 px-5  "
          />
          <div className=" navbar__leflside-searchcon cursor-pointer text-xl px-5 hover:text-blue-900 transition ease-in-out delay-200 text-blue-900 ">
            <BsSearch />
          </div>
        </div>
      </div>
      <div className="navbar__logo  flex items-center justify-center w-1/3 ">
        <img src={logo} alt="logo" className="h-14 w-auto" />
      </div>
      <div className="navbar__rightside flex w-1/3 text-3xl gap-10 pr-20 items-center justify-end">
        <div className="navbar__dark cursor-pointer hover:text-blue-900 transition ease-in-out delay-200 text-blue-900">
          <BsMoonStars />
        </div>
        <div className="navbar__expand cursor-pointer hover:text-blue-900 transition ease-in-out delay-200 text-blue-900">
          <GiExpand />
        </div>
        <div className="navbar__notif cursor-pointer hover:text-blue-900 transition ease-in-out delay-200 text-blue-900">
          <BsBell />
        </div>
        <div className="navbar__user cursor-pointer hover:text-blue-900 transition ease-in-out delay-200">
          <div className="rounded-full p-1 border border-black hover:border-blue-900 text-3xl text-blue-900">
            <BiUser />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
