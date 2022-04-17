import { Redirect, Route, Switch } from "react-router";
import TeachersForm from "./TeachersForm";
import TeachersProfile from "./TeachersProfile";
import TeachersTable from "./TeachersTable"


function TeachersIndex() {
  return (
    <Switch>
      <Redirect exact from="/admin/teacherss" to="/admin/teachers" />
      <Route exact path="/admin/teachers" component={TeachersTable} />
      <Route exact path="/admin/teachers/new/:id?" component={TeachersForm} />
      <Route exact path="/admin/teachers/teacher/profile/:id?" component={TeachersProfile} />

    </Switch>
  );
}

export default TeachersIndex;
