import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Projects from "./components/Projects";
import Login from "./components/Login";
import Task from "./components/Task";

function App() {
  return (
 <Router>
     <Route exact path="/projects" component={Projects} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/task" component={Task} />
 </Router>
  );
}

export default App;
