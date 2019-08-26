import React, { Component } from "react";
import "./assets/css/main.scss";
import Header from "./common/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component
import HomeContent from "./components/HomeContent";
import LoginPage from "./components/Login";
import Registration from "./components/Registration";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <h1>Welcome to Course managment system</h1>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact render={() => <HomeContent />} />
              <Route path="/login" component={LoginPage} />
              <Route path="/registration" component={Registration} />
            </Switch>
          </main>
          <footer />
        </Router>
      </div>
    );
  }
}

export default App;
