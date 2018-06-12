import React, { Component } from 'react';
import './App.css';
import BatchesListContainer from './containers/batches/BatchesListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">EvaluApp</h1>
        </header>
        <BatchesListContainer />
      </div>
    );
  }
}

export default App;
