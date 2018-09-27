import React, { Component } from "react";

class ProjectDropdown extends Component {
  render() {
    return (
      <div className="dropdown">
        <div className="form-group col-md-4">
          <select id="inputState" className="form-control">
            <option selected>All Projects</option>
            <option>Project Name</option>
            <option>Project Name 2</option>
            <option>Project Name</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ProjectDropdown;
