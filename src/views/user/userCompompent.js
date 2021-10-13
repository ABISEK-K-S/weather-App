import React from "react";

function UserComponent() {
  let data = localStorage.getItem("userData");
  const image = require("../../assets/images/user-icon.png");
  return (
    <div>
      Users
      <div className="shadow p-3 mb-5 mt-3 bg-white rounded">
        <form onClick={(e) => alert("abisek")}>
          <div class="  col col-5 form-group mb-4">
            Search
            <input
              type="text"
              class="form-control mt-4 ms-4 rounded border"
              placeholder="Search user by name..."
            />
          </div>
        </form>
        <br />
        <span> Card view</span>
        <br />
        <br />
        <div class="card-group mb-5">
          <div class="card shadow-none  bg-light rounded me-4">
            <div class="col card-body">
              <img src={image} />
              <span class="tabspace">Username-Age-State</span>
            </div>
          </div>
          <div class="card shadow-none  bg-light rounded me-4">
            <div class="card-body">
              <img src={image} />
              <span class="tabspace">Username-Age-State</span>
            </div>
          </div>
          <div class="card shadow-none  bg-light rounded me-4">
            <div class="card-body">
              <img src={image} />
              <span class="tabspace">Username-Age-State</span>
            </div>
          </div>
        </div>
        {/* <br /> */}
        <span> List view</span>
        <br />
        <br />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <img src={image} />
            <span class="tabspace">Username-Age-State</span>
          </li>
          <li class="list-group-item">
            <img src={image} />
            <span class="tabspace">Username-Age-State</span>
          </li>
          <li class="list-group-item">
            <img src={image} />
            <span class="tabspace">Username-Age-State</span>
          </li>
          <li class="list-group-item">
            <img src={image} />
            <span class="tabspace">Username-Age-State</span>
          </li>
          <li class="list-group-item">
            <img src={image} />
            <span class="tabspace">Username-Age-State</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserComponent;
