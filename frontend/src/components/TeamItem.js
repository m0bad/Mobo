import React from "react";
import { Link } from "react-router-dom";
import DefaultTeamImg from "../images/team.jpg";

// const TeamItem = ({ name, imageUrl }) => {
const TeamItem = () => {
  return (
    <div className="col-md-3 TeamItem">
      <div>
        <img
          src={DefaultTeamImg}
          // src={imageUrl || DefaultTeamImg}
          className="rounded-circle"
          alt="team"
        />
      </div>
      <div className="team-item-text">
        <Link to="/signin" className="btn btn-lg btn-primary">
          my name
        </Link>
      </div>
    </div>
  );
};

export default TeamItem;
