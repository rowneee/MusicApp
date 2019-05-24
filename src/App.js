import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import MusicPage from './containers/MusicPage'

function App() {
  return (
      <div className="App">
        <NavBar />
        <MusicPage />
      </div>
  );
}

export default App;
