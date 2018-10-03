import React, { Component } from "react";

import MessageMe from "./MessageMe";
import MessageOther from "./MessageOther";

class Messages extends Component {
  render() {
    return (
      <div className="messages-container">
        <MessageMe />
        <MessageMe />
        <MessageOther />
        <MessageMe />
        <MessageMe />
        <MessageMe />
        <MessageOther />
        <MessageMe />
        <MessageOther />
      </div>
    );
  }
}

export default Messages;
