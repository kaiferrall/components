import React, { Component } from "react";

class MessageMe extends Component {
  render() {
    return (
      <div className="message-me">
        <div className="container">
          <div className="row">
            <div id="mm-img-container" className="col-md-1 col-2">
              <img id="oth-img" src="profilePhoto.jpg" />
            </div>
            <div id="mm-txt-container" className="col-md-11 col-10">
              <div className="oth-txt">
                This is the messages text. essages text essages text This is the
                messages text. essages text essages text This is the messages
                text. essages
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageMe;
