import "./sidebar.css";
import React, { useContext } from "react";
import {
  RiDashboardLine,
  RiSettings3Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { FaRegChartBar, FaHandsHelping } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { GeneralContext } from "../../hooks/context/GeneralContext";
import { useEffect } from "react";

const Sidebar = () => {
  const menu = useContext(GeneralContext);

  return (
    <div
      className={`sidebar h-screen   transition-all delay-300 ease-in-out rounded-lg bg-gray-100 ${
        menu.menuOpen ? "w-64" : "w-24"
      }`}
    >
      <div
        className="  flex flex-col  items-center px-8 py-8 text-gray-400 transition-colors duration-300 transform rounded-lg
        dark:text-blue-800 hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-200 hover:text-blue-700 text-3xl "
      >
        
        <RiDashboardLine className="  cursor-pointer " />
        <a href="dashboard"
        
          className={` transition-all delay-300 ease-in-out ${
            menu.menuOpen ? "text-lg" : "hidden "
          }`}
        >
          Dashboard{" "}
          </a>
        
      </div>
      <div
        className="  flex flex-col items-center px-8 py-8 text-gray-400 transition-colors duration-300 transform rounded-lg 
         dark:text-blue-800 hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-200 hover:text-blue-700 text-3xl "
      >
        <BiUser className="  items-center" />
        <a
          href="users"
          className={` transition-all delay-300 ease-in-out cursor-pointer ${
            menu.menuOpen ? "text-lg" : "hidden "
          }`}
        >
          Profiles{" "}
        </a>
      </div>
      <div
        className=" flex flex-col items-center px-8 py-8 text-gray-400 transition-colors duration-300 transform rounded-lg
         dark:text-blue-800 hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-200 hover:text-blue-700 text-3xl "
      >
        <TbBuildingSkyscraper className=" justify-center items-center" />
        <a
          href="company"
          className={` transition-all delay-300 ease-in-out ${
            menu.menuOpen ? "text-lg" : "hidden "
          }`}
        >
          {" "}
          Entreprise{" "}
        </a>
      </div>

      <div
        className="  flex  flex-col justify-center items-center px-8 py-8 text-gray-400 transition-colors duration-300 transform rounded-lg
         dark:text-blue-800 hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-200 hover:text-blue-700 text-3xl "
      >
        <FaHandsHelping className=" justify-center items-center"  />
        <a
          href="partners"
          className={` transition-all delay-300 ease-in-out ${
            menu.menuOpen ? "text-lg" : "hidden "
          }`}
        >
          Partenaire{" "}
        </a>
      </div>
      <div
        className="  flex flex-col justify-center items-center px-8 py-8 text-gray-400 transition-colors duration-300 transform rounded-lg
         dark:text-blue-800 hover:bg-blue-800 dark:hover:bg-blue-800  hover:text-blue-700 text-3xl "
      >
        <FaRegChartBar className=" justify-center items-center" />
        <a
          href=""
          className={` transition-all delay-300 ease-in-out ${
            menu.menuOpen ? "text-lg" : "hidden "
          }`}
        >
          Statistique{" "}
        </a>
      </div>

      <div
        className="flex flex-col items-center px-8 py-8 text-gray-400 transition-colors duration-300 transform rounded-lg
         dark:text-blue-800 hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-200 hover:text-blue-700 text-3xl "
      >
        <RiLogoutBoxRLine className=" justify-center items-center" />
        <a
          href=""
          className={` transition-all delay-300 ease-in-out ${
            menu.menuOpen ? "text-lg" : "hidden "
          }`}
        >
          Déconnexion{" "}
        </a>
        
      </div>
    </div>
  );
};

export default Sidebar;
