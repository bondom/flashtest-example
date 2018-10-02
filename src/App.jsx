import * as React from "react";
import { Router, Switch, Redirect, Route, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { RegistrationForm, TodoList } from "./components";

import "./styles.css";

import { CollectorComponent } from "flashtest";

const App = () => (
  <Router history={createHistory()}>
    <div>
      <nav>
        <Link to="/registrationForm">RegistrationForm</Link>
        <Link to="/todoList">TodoList</Link>
      </nav>
      <Switch>
        <Route exact path="/registrationForm" component={RegistrationForm} />
        <Route exact path="/todoList" component={TodoList} />
        <Redirect to="/registrationForm" />
      </Switch>
    </div>
  </Router>
);

const ExportedApp = process.env.WRITE_TEST
  ? () => (
      <CollectorComponent
        saveToFs={true}
        addComments={true}
        mockApiResponses={true}
        testsFolder="__tests__"
      >
        <App />
      </CollectorComponent>
    )
  : App;

export default ExportedApp;
