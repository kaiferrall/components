import React, { Component } from "react";

class MyProjectCard extends Component {
  render() {
    return (
      <div id="project-card" className="card">
        <div className="row">
          <div className="col-md-5 ">
            <img src="projectDetails.jpg" id="project-img" />
          </div>
          <div className="col-md-7">
            <div className="project-content">
              <h2>Project Name</h2>
              <small id="project-response" className="text text-muted">
                Responses
              </small>
              <br />
              <h5 id="project-type">Type</h5>
              <h5 id="project-location">Location</h5>
              <h6>Status</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProjectCard;
