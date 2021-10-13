import React, { useState } from "react";
import moment from "moment-timezone";

function Header() {
  let current_time = moment().format("ddd D MMM h:mm A");

  return (
    <div>
      <div class="container">
        <div class="row shadow p-3 mb-5 mt-3 bg-white rounded">
          <div class="col">{current_time}</div>
          <div class="col align-position">
            <span>Welcome John </span>
            <img src={require("../../assets/images/user-icon.png")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
