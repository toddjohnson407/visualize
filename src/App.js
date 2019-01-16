import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';

var id = 1;
var title = "To Do Today";

class App extends Component {

  render() {
    return Task({ task: { id, title}});
  }
}

export default App;
