import React, { useState } from "react";
import "./login.css";

import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const cookies = new Cookies();
  let navigate = useNavigate();
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("");

  const validate_form = () => {
    // e.preventDefault()

    //check data
    // console.log("fn function");
    cookies.set("user", "rawaa");
    navigate("/");
  };

  return (
    <div className="page__log h-screen w-full flex justify-center items-center      ">
      <div
        className="l-right h-3/4 flex justify-center 
        items-center flex-col gap-10  
       border-color: rgb(229 231 135) relative  w-2/5 rounded-3xl ring bg-slate-50"
      >
        
        <img src={Logo} alt="avatar" className=" " width={150} />
        <div className="l-adress flex flex-col gap-4  justify-center items-center text-xl font-bold ">
          <div className=" flex gap-4 p-2 border-b-2 border-gray-300  px-3">
            <FaUserAlt className=" " />
            <input
              type="email"
              placeholder={email}
              className="outline-none text-xl"
              onChange={(text) => {
                setEmail(text.target.value);
              }}
            />
          </div>
        </div>
        <div className="l-pass flex flex-col gap-10  justify-center items-center text-xl font-bold ">
          <div className=" flex gap-4 p-2 border-b-2 border-gray-300  px-3">
            <RiLockPasswordFill className=" " />

            <input
              type="password"
              placeholder="Mot de passe"
              className="outline-none text-xl "
              onChange={(text) => {
                setPassword(text.target.value);
              }}
            />
          </div>
          <div className="btn  gap-10 ">
            <button
              className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-4  rounded-full w-96 text-xl "
              onClick={() => validate_form()}
            >
              Se connecter{" "}
            </button>
          </div>
          <div className="text-xl text-blue-900">
            <p className="underline decoration-1 "><a href="registre"> S'inscrire</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
