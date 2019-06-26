import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeamSettingsList extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={styles.li}>
          <Link className="btn btn-link" style={styles.anchor}>
            Send Complain
          </Link>
        </li>
        <li className="list-group-item" style={styles.li}>
          <Link className="btn btn-link" style={styles.anchor}>
            Leave Team
          </Link>
        </li>
        <li className="list-group-item" style={styles.li}>
          <Link className="btn btn-link" style={styles.anchor}>
            Add User
          </Link>
        </li>
        <li className="list-group-item" style={styles.li}>
          <Link className="btn btn-link" style={styles.anchor}>
            Remove User
          </Link>
        </li>
        <li className="list-group-item" style={styles.li}>
          <Link className="btn btn-link" style={styles.anchor}>
            Delete Team
          </Link>
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
  }
};
export default TeamSettingsList;
