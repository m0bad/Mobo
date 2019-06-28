import React, { Component } from "react";
import $ from "jquery";

class MessagesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  componentDidMount() {
    const userInput = $("#input");
    userInput.on("keypress", e => {
      if (e.which === 13) {
        e.preventDefault();
        let messageContent = this.state.message;
        this.props.onSubmit(
          this.props.teams.selectedTeam._id,
          this.props.currentUser.user.id,
          localStorage.jwtToken,
          messageContent
        );
        userInput.val("");
        this.setState({ message: "" });
      }
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="form-group shadow-textarea">
        <textarea
          id="input"
          style={styles.msgForm}
          className="form-control z-depth-1"
          rows="2"
          placeholder="Write Your Message"
          onChange={this.handleChange}
          name="message"
        />
      </div>
    );
  }
}

const styles = {
  msgForm: {
    fontSize: "20px",
    fontStyle: "italic"
  }
};
export default MessagesForm;
