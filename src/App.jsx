import React, { useState } from 'react';
import { animals } from './animals';
import './App.css';

const App = () => {
  const [selectedFact, setSelectedFact] = useState('');
  const showBackground = true;

  const displayFact = (e) => {
    const clickedAnimal = e.target.alt;
    const optionIndex = Math.floor(Math.random() * animals[clickedAnimal].facts.length);
    const animalGeneratedFact = animals[clickedAnimal].facts[optionIndex];
    setSelectedFact(animalGeneratedFact);
  };

  const images = Object.keys(animals).map((animal) => (
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      role="button"
      onClick={displayFact}
    />
  ));

  return (
    <div>
      {showBackground && <img className="background" alt="ocean" src={`./images/ocean.jpg`} />}
      <div className="animals">{images}</div>
      <p id="fact">{selectedFact}</p>
      <h1>{selectedFact === '' ? 'Click an animal for a fun fact' : 'Fun Fact!'}</h1>
    </div>
  );
};

export default App;