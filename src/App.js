import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ProjectList from "./components/ProjectList/ProjectList";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ProjectList} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </div>
  );
}

export default App;
