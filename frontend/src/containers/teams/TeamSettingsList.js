import React, { Component } from "react";
import { button } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import TeamMemberActions from "../../components/forms/TeamMemberActions";
import { addMember, removeMember } from "../../store/actions/teams";

class TeamSettingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddUserPopup: false,
      showRemoveUserPopup: false
    };
  }
  componentDidMount() {
    const addUsrBtn = $("#add-usr");
    addUsrBtn.click(() => {
      this.setState({ showAddUserPopup: !this.state.showAddUserPopup });
    });

    const removeUsrBtn = $("#remove-usr");
    removeUsrBtn.click(() => {
      this.setState({ showRemoveUserPopup: !this.state.showAddUserPopup });
    });
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={styles.li}>
          <button className="btn btn-button" style={styles.anchor}>
            Send Complain
          </button>
        </li>
        <li className="list-group-item" style={styles.li}>
          <button className="btn btn-button" style={styles.anchor}>
            Leave Team
          </button>
        </li>
        <li className="list-group-item" style={styles.li}>
          <button className="btn btn-button" id="add-usr" style={styles.anchor}>
            Add User
          </button>
          {this.state.showAddUserPopup && (
            <TeamMemberActions
              onAddMember={this.props.addMember}
              {...this.props}
            />
          )}
        </li>
        <li className="list-group-item" style={styles.li}>
          <button
            className="btn btn-button btn-danger"
            style={styles.anchorDanger}
            id="remove-usr"
          >
            Remove User
          </button>
          {this.state.showRemoveUserPopup && (
            <TeamMemberActions
              onRemoveMember={this.props.removeMember}
              {...this.props}
            />
          )}
        </li>
        <li className="list-group-item" style={styles.li}>
          <button
            className="btn btn-button btn-danger"
            style={styles.anchorDanger}
          >
            Delete Team
          </button>
        </li>
      </ul>
    );
  }
}

const styles = {
  anchor: {
    color: "#57B4F2"
  },
  li: {
    backgroundColor: "#F6F6F6"
  },
  anchorDanger: {
    color: "#fff"
  }
};

function mapStateToProps(state) {
  return {
    teamMembers: state.teamMembers
  };
}
export default connect(
  mapStateToProps,
  { addMember, removeMember }
)(TeamSettingsList);
