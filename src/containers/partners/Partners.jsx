import "./partners.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import carrefour from "../../Assets/Images/carrefour.png";
import yaghlane from "../../Assets/Images/yaghlane.png";
import { FiUserPlus ,FiUsers } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import {HiPencilAlt} from "react-icons/hi";
import {MdOutlineAddAPhoto} from "react-icons/md";
import Cookies from "universal-cookie";
import swal from "sweetalert";

export const Partners = () => {
  const cookies = new Cookies();
  let navigate = useNavigate();
  const [email, setEmail] = useState("example@hgmail.com");
  const [name, setName] = useState("name");
  const [phonenumber, setPhoneNumber] = useState("phonenumber");
  const [governorat, setGovernorat] = useState("governorat");
  const [file, setFile] = useState("file");
  const validate_form = () => {
    cookies.set("user", "rawaa");
    navigate("/");
  };
  const [addModal, setAddModal] = useState(false);
  const [modifModal, setModifModal] = useState(false);

  return (
    <div className="w-full p-10 border">
      <div className="px-6 py-2 w-full flex flex-row items-center justify-between border bg-white">
        <div className="flex flex-row gap-1 text-xl">
          <Link to="/" className="font-semibold text-blue-900">
            Home
          </Link>
          <span className="text-blue-900">/</span>
          <span className="text-blue-900">Partenaire</span>
        </div>
        <button
          class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-blue-900 rounded-lg group bg-gradient-to-br from-green-300 to-blue-900 group-hover:from-blue-600 group-hover:to-blue-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-900 "
          onClick={() => setAddModal(!addModal)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            <div className="flex flex-row items-center gap-1 text-lg">
              <IoMdAddCircle size={24} />
              Ajouter
            </div>
          </span>
        </button>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        {/* //////////////// */}
        <div className="flex flex-col rounded-md p-6  h-76 shadow-lg bg-gray-50 ">
          <div className="avatar p-1 flex  justify-center ">
            <img src={carrefour} alt="Partner avatar" className="h-20 w-auto" />
          </div>
          <div className="partner-data flex flex-col items-center  text-xl  gap-2 p-3 text-blue-900 ">
            <div className="flex gap-4 font-semibold ">
              <h2>Nom du partenaire:</h2>
              <h2 className=" ">Carrefour Tunisie</h2>
            </div>
            <div className="flex gap-4  font-semibold">
              <h2>Adresse:</h2>
              <h2 className=" ">
                {" "}
                Centre commercial Carrefour Croisement RN9/RN10, La Marsa 2046
              </h2>
            </div>
            <div className="flex gap-4  font-semibold">
              <h2>Adresse e-mail :</h2>
              <h2 className=" ">drive-service-clients@carrefour.fr </h2>
            </div>
          </div>
          <div className="flex flex-row justify-center p-2  ">
          
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              onClick={async () =>
                await swal({
                  title: "Supprimer ",
                  text: "Êtes-vous sur de vouloir supprimer cet partenaire?",
                  icon: "warning",
                  dangerMode: true,
                })
              }
            >
              <div className="flex flex-row items-center text-lg ">
                <RiDeleteBin5Line size={24} />
                Supprimer
              </div>
            </button>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              onClick={() => setModifModal(!modifModal)}
              
              
            >
              <div className="flex flex-row items-center text-lg ">
                <HiPencilAlt size={24} />
                Modifier
              </div>
            </button>
          </div>
        </div>

        {/* //////////////// */}
        <div className=" flex flex-col rounded-md p-6  h-76 shadow-lg bg-gray-50 ">
          <div className="avatar p-1 flex  justify-center ">
            <img src={yaghlane} alt="Yaghlanelogo" className="h-20 w-auto" />
          </div>
          <div className="partner-data flex flex-col items-center  text-xl  gap-2 p-3 text-blue-900 ">
            <div className="flex gap-4 font-semibold ">
              <h2>Nom du partenaire:</h2>
              <h2 className=" ">Ben yaghlane shops</h2>
            </div>
            <div className="flex gap-4  font-semibold">
              <h2>Adresse:</h2>
              <h2 className=" ">
                {" "}
                10, Rue Mustapha MBAREK ; 1000 TUNIS REPUBLIQUE TUNIS
              </h2>
            </div>
            <div className="flex gap-4  font-semibold">
              <h2>Adresse e-mail :</h2>
              <h2 className=" ">salwa.setrapa@gmail.com </h2>
            </div>
          </div>
          <div className="flex flex-row justify-center p-2  ">
          
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
            >
              <div className="flex flex-row items-center text-lg">
                <RiDeleteBin5Line size={24} />
                Supprimer
              </div>
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              
              
            >
              <div className="flex flex-row items-center text-lg ">
                <HiPencilAlt size={24} />
                Modifier
              </div>
            </button>
          </div>
        </div>
      </div>

      {!addModal ? null : (
        <div className="partner__modal z-10 rounded-lg flex flex-col  gap-10  shadow-2xl p-4">
          <h1
            className="text-3xl font-bold flex justify-center items-center text-white 
        "
          >
            Ajouter un partenaire
          </h1>
          <label htmlFor="upload-image" className="cursor-pointer">
          <div className="avatar  flex   justify-center items-center text-white ">
              <MdOutlineAddAPhoto size={100}/>
          </div>
          </label>
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
             
          <div className="w-full flex flex-col">

                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Nom du partenaire :
                </label>
                <input
                  type="text"
                  placeholder=" Entrer le nom  "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setName(text.target.value);
                  }}
                />
              </div>

              <div className="w-full flex flex-col ">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Numéro de téléphone :
                </label>

                <input
                  type="number"
                  placeholder="Numéro de téléphone "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setPhoneNumber(text.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col  ">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Adresse E-mail :
                </label>
                <input
                  type="email"
                  placeholder="Adresse E-mail"
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setEmail(text.target.value);
                  }}
                />
              </div>

              <div className="w-full flex flex-col">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Gouvernorat :
                </label>
                <select
                  name=""
                  id=""
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setGovernorat(text.target.value);
                  }}
                >
                  <option value="Bizerte">Bizerte</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Béja">Béja</option>
                </select>
              </div>
              {/* <div className="w-full flex flex-col">
                <label
                  className="text-white font-semibold text-xl px-2 py-4 "
                  for="user_avatar"
                >
                  Importer le logo :
                </label>
                <input
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setFile(text.target.value);
                  }}
                  id="user_avatar"
                  type="file"
                />
              </div> */}
            </div>
          </div>
          <div className="w-full flex justify-evenly">
            <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-blue-900 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-900 group-hover:from-blue-600 group-hover:to-blue-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-900 "
              onClick={() => validate_form()}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                <div className="flex flex-row items-center gap-1 text-lg">
                  <FiUserPlus size={24} />
                  Ajouter
                </div>
              </span>
            </button>

            <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-blue-900 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-900 group-hover:from-blue-600 group-hover:to-blue-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-900 "
              onClick={() => setAddModal(!addModal)}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                <div className="flex flex-row items-center gap-1 text-lg">
                  <GiCancel size={24} />
                  Annuler
                </div>
              </span>
            </button>
          </div>
        </div>
      )}

{!modifModal ? null : (
        <div className="partner__modal z-10 rounded-lg flex flex-col  gap-10  shadow-2xl p-4">
          <h1
            className="text-3xl font-bold flex justify-center items-center text-white 
        "
          >
            Modifier un partenaire
          </h1>
          <label htmlFor="upload-image" className="cursor-pointer">
          <div className="avatar  flex   justify-center items-center text-white ">
              <MdOutlineAddAPhoto size={100}/>
          </div>
          </label>
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
             
          <div className="w-full flex flex-col">

                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Nom du partenaire :
                </label>
                <input
                  type="text"
                  placeholder=" Entrer le nom  "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setName(text.target.value);
                  }}
                />
              </div>

              <div className="w-full flex flex-col ">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Numéro de téléphone :
                </label>

                <input
                  type="number"
                  placeholder="Numéro de téléphone "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setPhoneNumber(text.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col  ">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Adresse E-mail :
                </label>
                <input
                  type="email"
                  placeholder="Adresse E-mail"
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setEmail(text.target.value);
                  }}
                />
              </div>

              <div className="w-full flex flex-col">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Gouvernorat :
                </label>
                <select
                  name=""
                  id=""
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setGovernorat(text.target.value);
                  }}
                >
                  <option value="Bizerte">Bizerte</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Béja">Béja</option>
                </select>
              </div>
              
            </div>
          </div>
          <div className="w-full flex justify-evenly">
            <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-blue-900 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-900 group-hover:from-blue-600 group-hover:to-blue-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-900 "
              onClick={() => validate_form()}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                <div className="flex flex-row items-center gap-1 text-lg">
                  <HiPencilAlt size={24} />
                 Modifier
                </div>
              </span>
            </button>

            <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-blue-900 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-900 group-hover:from-blue-600 group-hover:to-blue-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-900 "
              onClick={() => setAddModal(!addModal)}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                <div className="flex flex-row items-center gap-1 text-lg">
                  <GiCancel size={24} />
                  Annuler
                </div>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Partners;
