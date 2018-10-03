import React, { Component } from "react";

class MessageInput extends Component {
  render() {
    return (
      <div>
        <div className="message-input-row">
          <form id="message-form">
            <textarea rows="3" type="text" placeholder="Your message" />
          </form>
        </div>
      </div>
    );
  }
}

export default MessageInput;
