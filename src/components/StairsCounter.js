import React, { Component } from "react";

class StairsCounter extends Component {
  render() {
    return (
      <div id="stairs-card" className="card">
        <div id="arrow-top">
          <a href="javascript:void(0)">
            <i className="fas fa-chevron-up" />
          </a>
        </div>
        <div id="count">
          <h1>0</h1>
          <h6>No stairs involved</h6>
        </div>
        <div id="arrow-bottom">
          <a href="javascript:void(0)">
            <i className="fas fa-chevron-down" />
          </a>
        </div>
      </div>
    );
  }
}

export default StairsCounter;
