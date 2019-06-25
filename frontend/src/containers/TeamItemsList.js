import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../store/actions/teams";
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
        <TeamItem name={t.name} imageUrl={t.imageUrl} />
      ));
    }

    return <div>{teamList}</div>;
  }
}

function mapStateToProps(state) {
  return { teams: state.teams };
}

export default connect(
  mapStateToProps,
  { fetchTeams }
)(TeamItemsList);
