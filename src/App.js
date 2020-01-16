import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import {TodoApp} from "./components/TodoApp"
import { TodoTask } from "./components/TodoTask";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <TodoApp />
          </Route>
          <Route path="/task/:taskID">
            <TodoTask />
          </Route>
        </Switch>
    </Router>
  );
}
