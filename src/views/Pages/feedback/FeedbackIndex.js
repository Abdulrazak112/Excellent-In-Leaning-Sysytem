import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import FeedbackInterface from "./FeedbackInterface";
// import Feedback from "./FeedbackForm";

const Feedbackindex = () => {
  return (
    <div>
      <Switch>
        <Redirect from="/admin/feedbacks" to="/admin/feedback" />
        <Route path="/admin/feedback" component={FeedbackInterface} />
      </Switch>
    </div>
  );
};

export default Feedbackindex;
