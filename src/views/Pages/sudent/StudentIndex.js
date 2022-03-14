import { Redirect, Route, Switch } from "react-router";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

function StudentIndex() {
  return (
    <Switch>
      <Redirect exact from="/admin/students" to="/admin/students" />
      <Route exact path="/admin/student/new" component={StudentForm} />
      <Route exact path="/admin/student" component={StudentTable} />
    </Switch>
  );
}

export default StudentIndex;
