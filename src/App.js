import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonList from './Component/TablePage/Table_List'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <PersonList />
      </div>
    );
  }
}

export default App;
