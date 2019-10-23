import React from "react";
import { Route, Router, Switch } from "react-router-dom";
// Views
import LoginPage from "../views/LoginPage/LoginPage";
import RegisterPage from "../views/RegisterPage/RegisterPage";
import HomePage from "../views/Home/Home";
import profilePage from "../views/Profile/Profile";
import notificationPage from "../views/Notification/Notification";
// History
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Register" exact component={RegisterPage} />
          <Route path="/Home/:id" exact component={HomePage} />
          <Route path="/Profile/:id" exact component={profilePage} />
          <Route path="/Notification/:id" exact component={notificationPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
