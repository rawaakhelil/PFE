import "./users.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiPencilAlt } from "react-icons/hi";
import swal from "sweetalert";
import { AiOutlineRightSquare } from "react-icons/ai";
import Avatar from "../../Assets/Images/user.png";
import Cookies from "universal-cookie";

const Users = () => {
  const cookies = new Cookies();
  let navigate = useNavigate();
  const [email, setEmail] = useState("example@hgmail.com");
  const [firstname, setFirstName] = useState("firstname");
  const [lastname, setLastName] = useState("lastname");
  const [phonenumber, setPhoneNumber] = useState("phonenumber");
  const [governorat, setGovernorat] = useState("governorat");
  const [date, setDate] = useState("date");
  const [file, setFile] = useState("file");

  const validate_form = () => {
    cookies.set("user", "rawaa");
    navigate("/");
  };

  const [addModal, setAddModal] = useState(false);
  const [modifModal, setModifModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  return (
    <div className="w-full relative p-10 border">
      <div className="px-6 py-2 w-full flex flex-row bg-white shadow items-center justify-between rounded-md border">
        <div className="flex flex-row gap-1 text-xl">
          <Link to="/" className="font-semibold text-blue-900">
            Home
          </Link>
          <span className="text-blue-900">/</span>
          <span className="text-blue-900">Users</span>
        </div>
        <button
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-blue-900 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-900 group-hover:from-blue-600 group-hover:to-blue-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-900 "
          onClick={() => setAddModal(!addModal)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            <div className="flex flex-row items-center gap-1 text-lg">
              <FiUserPlus size={24} />
              Ajouter
            </div>
          </span>
        </button>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-10">
        {/* //////////////// */}
        <div className="flex flex-col rounded-md p-3 h-72 shadow-lg bg-gray-50 ">
          <div className="avatar p-1 flex  justify-center ">
            <img src={Avatar} alt="user avatar" className="h-20 w-auto" />
          </div>
          <div className="user-data flex flex-col items-center  text-xl  gap-2 p-3 text-blue-900 ">
            <div className="flex gap-4 font-semibold ">
              <h2>Nom et prénom :</h2>
              <h2 className=" ">Rawaa Khlil</h2>
            </div>
            <div className="flex gap-4  font-semibold">
              <h2>Numéro de téléphone :</h2>
              <h2 className=" "> 54 737 258 </h2>
            </div>
          </div>
          <div className="flex flex-row justify-center p-2  ">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              onClick={async () =>
                await swal({
                  title: "Supprimer",
                  text: "Êtes-vous sur de vouloir supprimer cet employé?",
                  icon: "warning",
                 
                  dangerMode: true,
                })
              }
            >
              <div className="flex flex-row items-center text-lg">
                <RiDeleteBin5Line size={24} />
                Supprimer
              </div>
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              onClick={() => setModifModal(!modifModal)}
            >
              <div className="flex flex-row items-center text-lg">
                <HiPencilAlt size={24} />
                Modifier
              </div>
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            >
              <div
                className="flex flex-row items-center gap-1 text-xl"
                onClick={() => setDetailsModal(!detailsModal)}
              >
                <AiOutlineRightSquare size={29} />
                Détails
              </div>
            </button>
          </div>
        </div>
      </div>
      {!addModal ? null : (
        <div className="user__modal z-10 rounded-lg flex flex-col  gap-10  shadow-2xl p-4">
          <h1
            className="text-3xl font-semibold flex justify-center items-center text-white 
        "
          >
            Ajouter un employé
          </h1>
          <div className="">
            <div className="">
              <label htmlFor="upload_image" className="cursor-pointer">
                <div className="w-fit  rounded-full bg-white">
                  <img src={Avatar} alt="avatar" width={150} height={150} />
                </div>
              </label>
              <input type="file" name="" id="upload_image" className="hidden" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="w-full flex flex-col">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Prénom :
                </label>
                <input
                  type="text"
                  placeholder="Prénom "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setFirstName(text.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Nom de famille :
                </label>
                <input
                  type="text"
                  placeholder="Nom de famille "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setLastName(text.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col">
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
              <div className="w-full flex flex-col">
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
                  Date de naissance :
                </label>
                <input
                  type="date"
                  placeholder="Date of birth "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setDate(text.target.value);
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
        <div className="user__modal z-10 rounded-lg flex flex-col  gap-10  shadow-2xl p-4">
          <h1
            className="text-3xl font-semibold flex justify-center items-center text-white 
        "
          >
            Modifier un employé
          </h1>
          <div className="">
            <div className="">
              <label htmlFor="upload_image" className="cursor-pointer">
                <div className="w-fit  rounded-full bg-white">
                  <img src={Avatar} alt="avatar" width={150} height={150} />
                </div>
              </label>
              <input type="file" name="" id="upload_image" className="hidden" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="w-full flex flex-col">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Prénom :
                </label>
                <input
                  type="text"
                  placeholder="Prénom "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setFirstName(text.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col">
                <label className="text-white font-semibold text-xl px-2 py-4 ">
                  Nom de famille :
                </label>
                <input
                  type="text"
                  placeholder="Nom de famille "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setLastName(text.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col">
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
              <div className="w-full flex flex-col">
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
                  Date de naissance :
                </label>
                <input
                  type="date"
                  placeholder="Date of birth "
                  required
                  className="text-lg rounded-md h-14 w-full bg-gray-100 border-gray-100 text-blue-900 px-2"
                  onChange={(text) => {
                    setDate(text.target.value);
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
                  <FiUserPlus size={24} />
                  Modifier
                </div>
              </span>
            </button>

            <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-blue-900 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-900 group-hover:from-blue-600 group-hover:to-blue-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-900 "
              onClick={() => setModifModal(!modifModal)}
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
      {!detailsModal ? null : (
        <div className="details__modal z-10 rounded-lg flex flex-col  gap-10  shadow-2xl p-4 bg-white">
          <h1
            className="text-3xl font-bold flex justify-center items-center text-blue-900 
     "
          >
            Details
          </h1>
          <div className="">
            <table className=" text-xl text-left text-blue-900 flex-col w-full   ">
              <thead class="text-xl text-white uppercase bg-blue-900 w-full flex justify-center items-center ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Magasin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    prix
                  </th>
                </tr>
              </thead>
              <tbody class="text-xl text-blue-900 uppercase w-full flex justify-center items-center ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    -----
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ----
                  </th>
                  <th scope="col" className="px-6 py-3">
                    -----
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
