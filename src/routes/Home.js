/* eslint-disable no-unused-vars */
import React from "react";

import "../style/landing.css";

function landing() {
 
  const logo = require("../images/logo.jpg");
  const profile = require("../images/profile.png");
  const flag = require("../images/flag.png");
  const tree = require("../images/tree.png");
  const heart = require("../images/heart.png");
  const star = require("../images/star.png");
  const bishop = require("../images/bishop.png");
 
  return (
    <div className="landing">
      <h1 className="title">  SloVentures </h1>
      <img className="logo" src={logo} alt="Landing" />
      <img className="profile" src={profile} alt="Landing"/>
      <img className="flag" src={flag} alt="Landing"/>
      <img className="heart" src={heart} alt="Landing"/>
      <img className="tree" src={tree} alt="Landing"/>
      <h1 className="h1">Bishop Peak </h1>
      <h1 className="h2">Hiking Trail</h1>
      <h1 className="h3">rating</h1>
      <img className="star1" src={star} alt="Landing" />
      <img className="star2" src={star} alt="Landing" />
      <img className="star3" src={star} alt="Landing" />
        <img className="bishop" src={bishop} alt="Landing" />
        <h1 className="tips">Tips: </h1>
        <ul className="bullet-list">
        <li>The Bishop Peak Natural Reserve is open to hikers and climbers only - no bicycles.</li>
        <li>The sign for the Patricia Drive trailhead is not visible from the road. Park along the street, being careful not to block a private driveway.</li>
      <li>Dogs are permitted but must be kept on a leash at all times to ensure the safety of wildlife and other visitors.</li>
      <li>Be aware of weather conditions and dress accordingly, as the terrain may vary, and certain areas could be slippery.</li>
      <li>Camping or overnight stays are not allowed within the reserve; it is open for day-use only.</li>
      <li>The use of drones is prohibited within the Bishop Peak Natural Reserve.</li>
      </ul>
     
      </div>
    
  );
}

export default landing;





