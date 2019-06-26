import React, { Component } from "react";

class MessagesForm extends Component {
  render() {
    return (
      <div className="form-group shadow-textarea">
        <textarea
          style={styles.msgForm}
          className="form-control z-depth-1"
          rows="2"
          placeholder="Write Your Message"
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
