import React, { Component } from "react";
import { connect } from "react-redux";
import TeamMember from "../components/TeamMember";
import { fetchTeamMembers } from "../store/actions/teams";

class TeamMembersList extends Component {
  componentDidMount() {
    this.props.fetchTeamMembers(
      this.props.currentUser.user.id,
      this.props.teams.selectedTeam._id,
      localStorage.jwtToken
    );
  }
  render() {
    let teamMembers = [];
    if (this.props.teams.teamMembers) {
      let membersList = this.props.teams.teamMembers;
      teamMembers=membersList.map(member => <TeamMember username={member.username} />);
    }

    return <div> {teamMembers} </div>;
  }
}

function mapStateToProps(state) {
  return {
    teamMembers: state.teamMembers
  };
}

export default connect(
  mapStateToProps,
  { fetchTeamMembers }
)(TeamMembersList);
