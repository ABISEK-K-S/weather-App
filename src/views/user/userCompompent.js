import React from "react";
import image from "../../assets/images/user-icon.png";

function UserComponent(props) {
  var data = JSON.parse(localStorage.getItem("userData"));
  return (
    <div>
      Users
      <div className="shadow p-3 mb-5 mt-3 bg-white rounded">
        <form>
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
        <div class="container">
          <div class="card-group">
            {data && data["collection"] ? (
              data["collection"].map((key) => {
                return (
                  <div class="card shadow-none  bg-light rounded m-2">
                    <div class="card-body row ">
                      <div class="col-6">
                        <img src={image} width="50" height="50" class="mt-2" />
                      </div>
                      <span class="col-6 d-flex justify-content-center text-left">
                        {key.name} {key.phone} {key.state}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <a href="#" class="text-reset" onClick={e=>props.history.push("/add-user")}>
                {" "}
                "Please click here to add User Details "
              </a>
            )}
          </div>
        </div>
        <br />
        <span> List view</span>
        <br />
        <br />
        {data && data["collection"] ? (
          data["collection"].map((key) => {
            return (
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-bottom">
                  <img src={image} />
                  <span class="tabspace">
                    {key.name} - {key.phone} - {key.state}{" "}
                    </span>
                </li>
              </ul>
            );
          })
        ) : (
          <a href="#" class="text-reset" onClick={e=>props.history.push("/add-user")}>
            {" "}
            "Please click here to add User Details "
          </a>
        )}
      </div>
    </div>
  );
}

export default UserComponent;
