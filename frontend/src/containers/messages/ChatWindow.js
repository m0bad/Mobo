import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../../store/actions/messages";
import MessageBody from "../../components/messages/MessageBody";

class ChatWindow extends Component {
  componentDidMount() {
    this.props.fetchMessages(
      this.props.teams.selectedTeam._id,
      this.props.currentUser.user.id,
      localStorage.jwtToken
    );
  }
  render() {
    let teamMessages = [];
    if (this.props.messages.messages) {
      let messages = this.props.messages.messages;
      teamMessages = messages.map(message => {
        let sentByUser = false;
        if (message.user === this.props.currentUser.user.id) {
          sentByUser = true;
        }
        let username = this.props.teams.teamMembers.map(member => {
          if (member._id === message.user) {
            return member.username;
          }
        });
        return (
          <MessageBody
            sentByUser={sentByUser}
            text={message.text}
            username={username}
          />
        );
      });
    }
    return <div>{teamMessages}</div>;
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}
export default connect(
  mapStateToProps,
  { fetchMessages }
)(ChatWindow);
