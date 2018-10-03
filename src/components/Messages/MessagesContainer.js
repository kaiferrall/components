import React, { Component } from "react";

import Messages from "./Messages";
import MessageInput from "./MessageInput";

class MessagesContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <div className="message-history">
              <Messages />
              <MessageInput />
            </div>
          </div>
          <div id="test" className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default MessagesContainer;
