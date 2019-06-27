import React from "react";
// import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import TeamItemsList from '../containers/teams/TeamItemsList';

const HomePage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return <LandingPage />;
  }
  return (
      <TeamItemsList currentUser={currentUser}/>
      // <TeamItem/>
  );
};

export default HomePage;
