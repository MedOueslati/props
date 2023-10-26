import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div className="players-list-container">
      {players.map((el, index) => (
        <Player key={index} {...el} />
      ))}
    </div>
  );
};

export default PlayersList;
