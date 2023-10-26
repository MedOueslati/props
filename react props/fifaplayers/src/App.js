import React from 'react';
import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <h1>Football Players</h1>
      {/* adding map method to iterate over an array */}
      <PlayersList />
    </div>
  );
}

export default App;