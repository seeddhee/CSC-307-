import { Routes, Route } from "react-router-dom";

import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import { alertObj } from "./components/navbar/NavbarData";
import Topnav from "./components/navbar/TopNavbar";
import Home from "./routes/Home";

function MyApp() {
  const userId = "647ecaabc61aa491d93c9cf7";
  const [user, setUser] = useState(getUserById(userId));
  const [alertObjState, setAlertObjectState] = React.useState(alertObj);

  async function getUserById(id) {
    try {
      const response = await axios.get("http://localhost:8000/users/" + id);
      return response.data.Users;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Topnav />
              <div className="container">
                <Navbar alertObj={alertObjState} /> <Home />{" "}
              </div>
            </Fragment>
          }
        />
      </Routes>
  );
}

export default MyApp;
