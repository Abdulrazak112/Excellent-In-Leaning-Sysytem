import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import messageForm from "./messageForm";

const Messageindex = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/admin/messages" to="/admin/message" />
        <Route exact path="/admin/message" component={messageForm} />
      </Switch>
    </div>
  );
};

export default Messageindex;
