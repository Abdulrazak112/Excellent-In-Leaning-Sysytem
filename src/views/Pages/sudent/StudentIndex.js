import { Redirect, Route, Switch } from "react-router";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import StudentDetails from "./StudentDetails"

function StudentIndex() {
  return (
    <Switch>
      <Redirect exact from="/admin/students" to="/admin/students" />
      <Route exact path="/admin/student/new/:id?" component={StudentForm} />
      <Route exact path="/admin/student" component={StudentTable} />
	  <Route exact path="/admin/student/details/:id?" component={StudentDetails}/>
    </Switch>
  );
}

export default StudentIndex;
