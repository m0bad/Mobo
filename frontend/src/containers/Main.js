import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "../components/forms/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

const Main = props => {
  const { authUser, errors, removeError } = props;
  return (
    <main className="l-main">
      <Switch>
        <Route exact path="/" render={() => <h1>Welcom</h1>} />
        <Route exact path="/about" render={() => <h1>about</h1>} />
        <Route exact path="/contact" render={() => <h1>contact</h1>} />
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
    errors: state.errors
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
