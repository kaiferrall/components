import React, { Component } from "react";

class ClientResponse extends Component {
  render() {
    return (
      <div>
        <div id="response" className="card">
          <div className="media">
            <img
              className="align-self-center mr-3"
              src="profilePhoto.jpg"
              id="response-photo"
            />

            <div className="media-body">
              <div id="response-content">
                <h4>John Doe Inc.</h4>
                <i
                  id="response-close"
                  style={{ color: "grey" }}
                  className="fas fa-times"
                />
                <p id="response-bio">
                  This is where the bio will go. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
                <h5>
                  <i id="response-msg-icon" className="fas fa-circle fa-sm" />
                  {"  "}
                  Hey I am looking to work for you. Testing longer message lest
                  see what happens. DAsd jsnda jsn this is more tjsa s sdaknds.
                </h5>
                <small className="text text-muted">2018-09-28</small>

                <p id="response-price">
                  - <i className="fas fa-paperclip" />
                  {"  "}$2000
                </p>
                <i id="response-arrow" className="fas fa-arrow-right fa-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientResponse;
