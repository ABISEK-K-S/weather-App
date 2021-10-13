import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import AddUser from "./../views/addUser/addUserComponent";
import Weather from "./../views/weather/weatherComponent";
import UserComponent from "./../views/user/userCompompent";

function RouteComponent() {
  return (
    <Switch>
      <Route exact path="/add-user" component={AddUser} />
      <Route exact path="/users" component={UserComponent} />
      <Route exact path="/weather" component={Weather} />
    </Switch>
  );
}

export default withRouter(RouteComponent);
