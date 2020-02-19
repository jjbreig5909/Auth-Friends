import React from 'react';
import logo from "./images/logo.jpg";
import './App.css';
import LoginForm from './Components/LoginForm';
import FriendsList from './Components/Friendslist';
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <img className="logo" src={logo} />
        <nav>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/protected" className="nav-link">Friends List</Link>
        </nav>
        <div className="page-content">
          <Switch>
            <ProtectedRoute exact path="/protected" component={FriendsList} />
            <Route path="/login" component={LoginForm} />
            <Route component={LoginForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
