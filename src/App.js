import React, { Component } from "react";
import "./App.css";

import Client_Response from "./components/Client_Response";
import MyProjectCard from "./components/MyProjectCard";
import ProjectDetails from "./components/ProjectDetails";
import ProjectDropdown from "./components/ProjectDropdown";
import NavBar from "./components/NavBar";
import StairsCounter from "./components/StairsCounter";
import MessagesContainer from "./components/Messages/MessagesContainer";

class App extends Component {
  render() {
    const InboxComponents = (
      <div className="row">
        <NavBar />
        {messagesComponent}
        <div className="col-md-2" />
        <div className="col-md-8" />
        <div className="col-md-2" />
      </div>
    );
    const messagesComponent = (
      <div>
        <NavBar />
        <MessagesContainer />
      </div>
    );
    return (
      <div className="App">
        <div className="row">
          <NavBar />
          <div className="col-md-2" />
          <div className="col-md-8">
            <StairsCounter />
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default App;
