import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams, selectTeam } from "../store/actions/teams";
import TeamItem from "../components/TeamItem";

class TeamItemsList extends Component {
  componentDidMount() {
    this.props.fetchTeams(
      this.props.currentUser.user.id,
      localStorage.jwtToken
    );
  }
  render() {
    let teamList = [];
    if (this.props.teams.teams) {
      let userTeams = this.props.teams.teams;
      teamList = userTeams.map(t => (
        <TeamItem team={t} onButtonClick={this.props.selectTeam}  key={t._id} />
      ));
    }

    return <div>{teamList}</div>;
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams,
    selectedTeam: state.selectedTeam
  };
}

export default connect(
  mapStateToProps,
  { fetchTeams, selectTeam }
)(TeamItemsList);
