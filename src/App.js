import React, { Component } from "react";
import "./App.css";

import Client_Response from "./components/Client_Response";
import ProjectDetails from "./components/ProjectDetails";
import ProjectDropdown from "./components/ProjectDropdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <ProjectDetails />
            <ProjectDropdown />
            <Client_Response />
            <Client_Response />
            <Client_Response />
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default App;
