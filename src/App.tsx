import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Router, Switch, useHistory } from "react-router-dom";

function App() {
  return (
    <Router history={useHistory()}>
      <div>Hello World</div>
      <Switch>
        <Route path="r/:id">
          <SubReddit></SubReddit>
        </Route>
        <Route exact path="/">
          <Redirect to="/r/all"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

function SubReddit() {
  return <div>SubReddit</div>;
}

export default App;
