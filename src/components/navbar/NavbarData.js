/* eslint-disable no-unused-vars */
import React from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

//Notification Alert object with Hardcoded values to represent the categories/names used for the tabs and sub tabs in the nav menu.

//key= category for the alert, value = number of alert.
export const alertObj = {
  dashboard: 0,
  Home: 0,
  virtualShop: 0,
  Create: 0,
  myPet: 0,
  settings: 0
};

//Once the backend data is imported the object will be merged with this list so that new categories populate in the nav bar with their corresponding alert number.
export const NavbarData = [
  {
    title: "Search",
    name: "search",
    path: "/search",
    icons: <AiIcons.AiOutlineSearch />,
    cName: "nav-text"
  },
  {
    title: "Home",
    name: "Home",
    path: "/Home",
    icons: <FiIcons.FiHome />,
    cName: "nav-text"
  },
  {
    title: "Ventures",
    name: "Ventures",
    path: "/Ventures",
    icons: <FaIcons.FaTree />,
    cName: "nav-text"
  },
  {
    title: "Create",
    name: "Create",
    path: "/Create",
    icons: <AiIcons.AiTwotonePlusSquare />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    name: "profile",
    path: "/profile",
    icons: <IoIcons.IoIosContact />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    name: "settings",
    path: "/settings",
    icons: <FiIcons.FiSettings />,
    cName: "nav-below"
  },
  {
    title: "Log Out",
    name: "Log Out",
    path: "/signout",
    icons: <TbIcons.TbLogout />,
    cName: "nav-below_"
  }
];
