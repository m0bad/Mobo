import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import NavBar from "./containers/Navbar/NavBar";
import { configureStore } from "./store";
import Main from "./containers/Main";
import { setAuthorizationToken, setCurrentUser } from "./store/actions/auth";

const store = configureStore();

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   //prevent someone from manually tempering with the key of jwtToken in localStorage
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//   } catch (err) {
//     store.dispatch(setCurrentUser({}));
//   }
// }

function App() {
  return (
    <Provider store={store}>
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
        <NavBar />
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
