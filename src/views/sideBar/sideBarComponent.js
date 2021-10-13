import React from "react";
import { Link } from "react-router-dom";
import logo from  "../../assets/images/Logo.png"
import image from  "../../assets/images/add-user.png"
import users from  "../../assets/images/users.png"
import weather from  "../../assets/images/weather.png"


function SideBar() {
  return (
    <div>
      <ul class="nav bg-white rounded sidebar">
        <div className="content">
          <img
            src={logo}
            className="img_logo"
            width="100"
            height="30"
          />
          <hr className="my-2" style={{ backgroundColor: "#66ccff" }} />
          <li class="nav-item">
            <Link to={"/add-user"} className="nav-link">
              <img src={image} />
              &nbsp; Add User
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/users"} className="nav-link">
              <img src={users} />
              &nbsp; Users
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/weather"} className="nav-link">
              <img src={weather} />
              &nbsp; Weather
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default SideBar;
