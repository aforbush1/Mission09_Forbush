import React from 'react';
import './App.css';
import collegeBasketballTeams from './CollegeBasketballTeams.json';

interface CollegeProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>Welcome to March Madness</h1>;
}

class CollegeBasketball extends React.Component<CollegeProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <img />
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>Location: {city}, {state}</h3>
      </div>
    );
  }
}

function CollegeTeamList() {
  return (
    <div>
      {collegeBasketballTeams.teams.map((oneTeam, index) => (
        <CollegeBasketball key={index} {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <CollegeTeamList />
    </div>
  );
}

export default App;
