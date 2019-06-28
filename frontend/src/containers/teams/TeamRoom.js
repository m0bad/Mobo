import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../store/actions/messages";
import MessagesForm from "../../components/forms/MessagesForm";
import ChatWindow from "../messages/ChatWindow";
import TeamSettingsList from "../teams/TeamSettingsList";
import TeamMembersList from "../teams/TeamMembersList";

class TeamRoom extends Component {
  render() {
    return (
      <div className="team-room">
        <myscript />

        <div className="container">
          <div className="row">
            <div className="col-md-2 team-members">
              <TeamMembersList
                currentUser={this.props.currentUser}
                teams={this.props.teams}
              />
            </div>
            <div className="col-md-8  main-chat">
              <ChatWindow {...this.props} />
            </div>
            <div className="col-md-2">
              <TeamSettingsList {...this.props} />
            </div>
            <div className="col-2" />
            <div className="col-8 msg-form">
              <MessagesForm onSubmit={this.props.sendMessage} {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}
export default connect(
  mapStateToProps,
  { sendMessage }
)(TeamRoom);
