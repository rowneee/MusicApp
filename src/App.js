import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import MusicPage from './containers/MusicPage'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <NavBar />
          <MusicPage />
          <div className="ui container">

          </div>
        </div>
    );
  }
}

export default App;
