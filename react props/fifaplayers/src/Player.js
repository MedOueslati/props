import React from 'react';
import Card from 'react-bootstrap/Card';

// declare array data for player
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br/>
          Nationality: {nationality}
          <br/>
          Jersey Number: {jerseyNumber}
          <br/>
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
// add default props
Player.defaultProps = {
    name: 'Player Name',
    team: 'Team',
    nationality: 'Nationality',
    jerseyNumber: 0,
    age: 0,
    imageURL: 'default.jpg'
  };

export default Player;
