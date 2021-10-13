import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./../src/styles.css";
import Header from "./../src/views/header/headerComponent";
import SideBar from "./../src/views/sideBar/sideBarComponent";
import RouteComponent from "./../src/helper/routes";

function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <div class="row">
          <div class="col col-3">
            <SideBar />
          </div>
          <div class="col col-9">
            <Header />
            <RouteComponent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
