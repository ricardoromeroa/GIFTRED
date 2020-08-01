import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.js";
import Main from "./layouts/Main.js";

const admin = false;
const hist = createBrowserHistory();

function App() {
  if (admin === true){ 
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Main} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    )
  } 
};

export default App;
