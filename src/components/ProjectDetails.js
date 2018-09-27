import React, { Component } from "react";

class ProjectDetails extends Component {
  render() {
    return (
      <div className="details">
        <div id="project-details-card" className="card">
          <img
            id="project-details-img"
            className="card-img-top"
            src="projectDetails.jpg"
            alt="Card image cap"
          />
          <div id="project-details-body" className="card-body">
            <h5 className="card-title">
              Project Details
              <a id="project-details-arrow" href="#">
                <i className="fas fa-arrow-right" />
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
