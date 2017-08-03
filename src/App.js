import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { addNews } from './actions'
import { connect} from 'react-redux'

import Header from './components/Header'
import Body from './components/Body'


class App extends Component {

  render() {

    return (
      <div className="App">
          <Header />
          <Body/>
      </div>
    );
  }
}

export default App;
