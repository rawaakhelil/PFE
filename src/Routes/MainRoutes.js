import React from "react";
import { Routes, Route, useLocation ,} from "react-router-dom";

import { Navbar, Sidebar  } from "../components/index";
import { Dashboard, Login,  Users,Partners,Company,Statistic,Register} from "../containers";

const MainRoute = () => {
  const location = useLocation();

  return (
    <div>
      {/* if (location){null} else {

        } */}
      {location.pathname === "/login" || location.pathname === "/register" ? null : <Navbar />},
     
      <div className="main__sidebar w-screen flex flex-row">
      {location.pathname === "/login" || location.pathname === "/register" ? null : <Sidebar /> }

      

          <Routes>
            <Route
              index
              element={
                  <Dashboard />
              }
            />
            <Route path="users" element={<Users />} />
            <Route path="partners" element={<Partners />} />
            <Route path="company" element={<Company />} />
            <Route path="login" element={<Login />} />
            <Route path="statistic" element={<Statistic />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />


            <Route path="*" element={<h1>404</h1>} />
          </Routes>

      </div>
    </div>

 
    
  );
};

export default MainRoute;
