import React from "react";
import { Link } from "react-router-dom";
import DefaultMemberImg from "../images/member.png";

const TeamMember = props => {
  return (
    <div className="card" style={styles.teamMember}>
      <div className="card-body">
        <img src={DefaultMemberImg} alt="name" className="member-img" />
        <div className="member-name">
          <Link className="card-link">mobad</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
    teamMember:{
        backgroundColor:'#f2f2f2',
    }
}
export default TeamMember;
