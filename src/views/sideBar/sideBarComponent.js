import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <ul class="nav bg-white rounded sidebar">
        <div className="content">
          <img
            src={require("../../assets/images/Logo.png")}
            className="img_logo"
            width="100"
            height="30"
          />
          <hr className="my-2" style={{ backgroundColor: "#66ccff" }} />
          <li class="nav-item">
            <Link to={"/add-user"} className="nav-link">
              <img src={require("../../assets/images/add-user.png")} />
              &nbsp; Add User
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/users"} className="nav-link">
              <img src={require("../../assets/images/users.png")} />
              &nbsp; Users
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/weather"} className="nav-link">
              <img src={require("../../assets/images/weather.png")} />
              &nbsp; Weather
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default SideBar;
