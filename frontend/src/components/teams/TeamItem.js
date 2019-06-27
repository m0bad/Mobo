import React from "react";
import { Link } from "react-router-dom";
import DefaultTeamImg from "../../images/team.jpg";

const TeamItem = props => {
  const { team } = props;
  const url = `/teams/${team._id}`;
  return (
    <div className="col-md-3 TeamItem">
      <div>
        <img
          src={DefaultTeamImg}
          className="rounded-circle"
          alt="team"
        />
      </div>
      <div className="team-item-text">
        <button
          className="btn btn-link"
          onClick={() => props.onButtonClick(team)}
        >
          <Link to={url} className="btn btn-lg btn-primary">
            {team.name}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TeamItem;
