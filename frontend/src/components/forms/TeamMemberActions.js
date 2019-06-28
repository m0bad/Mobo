import React, { Component } from "react";
import $ from "jquery";

class TeamMemberActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  componentDidMount() {
    const userInput = $("#user-input");
    userInput.on("keypress", e => {
      if (e.which === 13) {
        e.preventDefault();
        if (this.props.onRemoveMember) {
          let choosenUserId = this.getIdByUsername(this.state.username);
          this.props.onRemoveMember(
            choosenUserId,
            this.props.currentUser.user.id,
            this.props.teams.selectedTeam._id,
            localStorage.jwtToken
          );
        } else if (this.props.onAddMember) {
          this.props.onAddMember(
            this.state.username,
            this.props.currentUser.user.id,
            this.props.teams.selectedTeam._id,
            localStorage.jwtToken
          );
        }

        userInput.val("");
        this.setState({ username: "" });
      }
    });
  }

  getIdByUsername = username => {
    let teamMembers = this.props.teams.teamMembers;
    let foundId = "";
    teamMembers.map(member => {
      if (member.username === username) {
        foundId = member._id;
      }
    });
    return foundId;
    // if (!found) {
    //   this.props.addError({
    //     message: "there is no member in the team with the giver username"
    //   });
    // }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form style={styles.formPopUp}>
        <div className="form-group">
          <input
            className="form-control"
            id="user-input"
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

const styles = {
  formPopUp: {
    position: "apsolute",
    // border: '3px solid #f1f1f1',
    top: "50%",
    left: "50%",
    width: "120px",
    margin: "10px"
  }
};

export default TeamMemberActions;
