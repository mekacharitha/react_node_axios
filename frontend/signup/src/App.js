import React, { Component } from 'react';
import './App.css';
import SignUp from './container/signup';
import SignIn from './container/signIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <SignUp/>
      //     <SignIn/>
        <Router>
          <div >
            <nav>
              <ul>
                <li>
                  <Link to="/user/signUp">Sign Up</Link>
                </li>

                <li>
                  <Link to="/user/signIn">Sign In</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/user/signUp">
                <SignUp />
              </Route>
              <Route path="/user/signIn">
                <SignIn/>
              </Route>

            </Switch>
          </div>
        </Router>

    //  </div>
    );
  }
}

export default App;
