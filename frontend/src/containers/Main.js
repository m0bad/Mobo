import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "../components/forms/AuthForm";
import TeamForm from "../components/forms/TeamForm";
import { authUser } from "../store/actions/auth";
import { createTeam } from "../store/actions/teams";
import { removeError } from "../store/actions/errors";
import HomePage from "../components/HomePage";
import TeamRoom from "./TeamRoom";
// render={() => <HomePage currentUser={currentUser} {...props} />}

const Main = props => {
  const {
    authUser,
    errors,
    removeError,
    currentUser,
    teams,
    createTeam
  } = props;
  return (
    <main className="l-main">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/newTeam"
          render={() => (
            <TeamForm
              onTeamCreation={createTeam}
              currentUser={currentUser}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/teams/:id"
          render={() => (
            <TeamRoom currentUser={currentUser} teams={teams} {...props} />
          )}
        />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                heading="Welcome Back"
                buttonText="sign in"
                onAuth={authUser}
                errors={errors}
                removeError={removeError}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={() => (
            <AuthForm
              heading="Join Mobo Now"
              buttonText="sign up"
              signUp
              onAuth={authUser}
              errors={errors}
              removeError={removeError}
              {...props}
            />
          )}
        />
      </Switch>
    </main>
  );
};
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    teams: state.teams
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError, createTeam }
  )(Main)
);
