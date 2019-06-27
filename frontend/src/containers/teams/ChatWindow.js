import React, { Component } from "react";
// import RoundedButton from "../components/RoundedButton";
import MessageBody from "../../components/MessageBody";

class ChatWindow extends Component {
  render() {
    return (
      <div>
        <MessageBody sentByUser={false} text="imply dummy text of the printing and typesetting industry. Lorem Ipsuhas been the industry's standard dumm" />
        <MessageBody sentByUser={true} text="imply dummy text of the printing and typesetting industry. Lorem Ipsuhas been the industry's standard dumm" />
        <MessageBody sentByUser={false} text="imply dummy text of the printing and typesetting industry. Lorem Ipsuhas been the industry's standard dumm" />
        <MessageBody sentByUser={true} text="imply dummy text of the printing and typesetting industry. Lorem Ipsuhas been the industry's standard dumm" />
      </div>
    );
  }
}

export default ChatWindow;
