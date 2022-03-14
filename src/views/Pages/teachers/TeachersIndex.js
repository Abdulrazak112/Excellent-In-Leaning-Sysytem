import { Redirect, Route, Switch } from "react-router";
import TeachersForm from "./TeachersForm";

function TeachersIndex() {
  return (
    <Switch>
      <Redirect exact from="/admin/teacherss" to="/admin/teachers" />
      <Route exact path="/admin/teachers" component={TeachersForm} />
    </Switch>
  );
}

export default TeachersIndex;
