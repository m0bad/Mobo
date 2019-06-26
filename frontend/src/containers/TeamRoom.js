import React, { Component } from "react";
import TeamMember from "../components/TeamMember";
import MessagesForm from "../components/forms/MessagesForm";
import ChatWindow from "./ChatWindow";
import TeamSettingsList from "./TeamSettingsList";

class TeamRoom extends Component {
  render() {
    return (
      <div className="team-room">
        <div className="container">
          <div className="row">
            <div className="col-md-2 team-members">
              <TeamMember />
              <TeamMember />
              <TeamMember />
              <TeamMember />
            </div>
            <div className="col-md-8  main-chat">
              <ChatWindow />
            </div>
            <div className="col-md-2">
              <TeamSettingsList />
            </div>
            <div className="col-2" />
            <div className="col-8 msg-form">
              <MessagesForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamRoom;
