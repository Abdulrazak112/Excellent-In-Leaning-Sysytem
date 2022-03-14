import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ParentForm from "./ParentForm";

function parentIndex(params) {
  return (
    <div>
      <Switch>
        <Redirect exact from="/admin/parents" to="/admin/parent" />
        <Route exact path="/admin/parent" component={ParentForm} />
        {/* <Route exact path="/admin/student/new" component={StudentForm} /> */}
      </Switch>
    </div>
  );
}

export default parentIndex;
