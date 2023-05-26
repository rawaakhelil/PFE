import React from "react";
import "./statistic.css";
import Partner from "../../Assets/Image/partnerAvatar.png";
import Company from "../../Assets/Image/apartement.png";
import User from "../../Assets/Image/user.png";

const statistic = () => {
  return (
    <div className="w-full p-10 border">
      <div className="mt-6 grid grid-cols-2 gap-10 ">
        <div className="flex flex-col rounded-md p-3 h-72 shadow-lg bg-blue-50 dark:bg-blue-900 ">
        <div className="avatar p-1 flex  justify-center ">
                    <img
                      src={Partner}
                      alt="user avatar"
                      className="h-20 w-auto"
                    />
                    

        </div>
        <div className="user-data flex flex-col items-center  text-xl  gap-2 p-3 text-blue-900 dark:text-white ">
                    <div className="flex gap-4 font-semibold ">
                      <h2>Nombre des partenaires:</h2>
                      <h2 className=" "></h2>
                    </div>
                    <div className="flex gap-4  font-semibold">
                      <h2>:</h2>
                      <h2 className=" ">  </h2>
                    </div>
                  </div>
        </div>
        <div className="flex flex-col rounded-md p-3 h-72 shadow-lg bg-blue-50 dark:bg-blue-900">
        <div className="avatar p-1 flex  justify-center ">
                    <img
                      src={Company}
                      alt="user avatar"
                      className="h-20 w-auto"
                    />
                    

        </div>
        <div className="user-data flex flex-col items-center  text-xl  gap-2 p-3 text-blue-900 dark:text-white ">
                    <div className="flex gap-4 font-semibold ">
                      <h2>Nombre des Amicales:</h2>
                      <h2 className=" "></h2>
                    </div>
                    <div className="flex gap-4  font-semibold">
                      <h2>:</h2>
                      <h2 className=" ">  </h2>
                    </div>
                  </div>
        </div>
        <div className="flex flex-col rounded-md p-3 h-72 shadow-lg bg-blue-50 dark:bg-blue-900">
        <div className="avatar p-1 flex  justify-center ">
                    <img
                      src={User}
                      alt="user avatar"
                      className="h-20 w-auto"
                    />
                    

        </div>
        <div className="user-data flex flex-col items-center  text-xl  gap-2 p-3 text-blue-900 dark:text-white ">
                    <div className="flex gap-4 font-semibold ">
                      <h2>Nombre des utilisateurs VIP:</h2>
                      <h2 className=""> </h2>
                    </div>
                    <div className="flex gap-4  font-semibold">
                      <h2></h2>
                      <h2 className=" ">  </h2>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default statistic;
