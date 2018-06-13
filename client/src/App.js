import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import BatchesListContainer from './containers/batches/BatchesListContainer'
import StudentsListContainer from './containers/students/StudentsListContainer'
import SignUpPage from './containers/signup/SignUp'
import LoginComponent from './containers/signup/LogIn'
import StudentPage from './containers/student/StudentPage'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">EvaluApp</h1>
          </header>

          <Route exact path="/batches" component={BatchesListContainer} />
          <Route exact path="/batches/:id" component={StudentsListContainer} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/students/:id" component={StudentPage} />

        </div>
      </Router>
    );
  }
}

export default App;
