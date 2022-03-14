import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ManageUsers from "./ManageUsers";

const Manageindex = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/adminmanage/users" to="/admin/manage/user" />
        <Route exact path="/admin/manage/user" component={ManageUsers} />
      </Switch>
    </div>
  );
};

export default Manageindex;
