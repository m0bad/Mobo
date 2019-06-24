import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./containers/Navbar/NavBar";
import MenuItem from "./containers/Navbar/MenuItem";
import LoginForm from "./components/Form";
function App() {
  return (
    <Router>
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://asker-management-test.revinate.com/components/styleguide/_site/css/bootstrap.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://asker-management-test.revinate.com/components/styleguide/_site/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://asker-management-test.revinate.com/components/styleguide/_site/css/app-alt.css"
        />
      </div>
      <NavBar>
        <MenuItem label="Home" href="/" />
        <MenuItem label="About Us" href="/about" />
        <MenuItem label="Contact Us" href="/contact" />
        <MenuItem
          label="Sign in"
          href="/signin"
          pulledRight={true}
          isExternalUrl={true}
        />
        <MenuItem label="Sign up" href="/signup" pulledRight={true} />
      </NavBar>
      <main className="l-main">
        <Switch>
          <Route exact path="/" render={() => <h1>Welcom</h1>} />
          <Route exact path="/about" render={() => <h1>about</h1>} />
          <Route exact path="/contact" render={() => <h1>contact</h1>} />
          <Route
            exact
            path="/signin"
            render={() => (
              <LoginForm heading="Welcome Back" buttonText="sign in"/>
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <LoginForm heading="Join Mobo Now" buttonText="sign up" signUp />
            )}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
