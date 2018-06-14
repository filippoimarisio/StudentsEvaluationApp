import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import BatchesListContainer from './containers/batches/BatchesListContainer'
import StudentsListContainer from './containers/students/StudentsListContainer'
import SignUpPage from './containers/signup/SignupPage'
import LoginPage from './containers/login/LoginPage'
import StudentPage from './containers/student/StudentPage'
import AskQuestion from './containers/students/AskQuestion'
import TopBar from './containers/style/navBar'
 


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav>
          <TopBar />
        </nav>
          <Route exact path="/batches" component={BatchesListContainer} />
          <Route exact path="/batches/:id" component={StudentsListContainer} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/students/:id" component={StudentPage} />
          <Route exact path="/randomstudent" component={AskQuestion} />
          <Route exact path="/" render={ () => <Redirect to="/signup" /> } />

        </div>
      </Router>
    );
  }
}

export default App;
