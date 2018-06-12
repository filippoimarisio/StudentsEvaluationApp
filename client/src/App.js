import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import BatchesListContainer from './containers/batches/BatchesListContainer'
import StudentsListContainer from './containers/students/StudentsListContainer'
import SignUpComponent from './containers/signup/SignUp'
import LoginComponent from './containers/signup/LogIn'



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
          <Route exact path="/signup" component={SignUpComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
