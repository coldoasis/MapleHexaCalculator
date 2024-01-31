// HexaCalculator.js

import React, { useState } from 'react';
import './HexaCalculator.css';
import HexaIcon from './origin-skill.png';
import solErdaIcon from './sol-erda.png'; 
import solErdaFragmentIcon from './sol-erda-fragment.png';


function HexaCalculator() {
  // State to store user inputs
  const [skillType, setSkillType] = useState(''); // Default value is an empty string
  const [skillLevel, setSkillLevel] = useState(0); // Default value is 0

  // Function to handle skill type change
  const handleSkillTypeChange = (event) => {
    setSkillType(event.target.value);
  };

  // Function to handle skill level change
  const handleSkillLevelChange = (event) => {
    setSkillLevel(Number(event.target.value)); // Convert the input to a number
  };

  // Function to perform the calculation
  const calculateResult = () => {
    // Skill type to amounts mapping with levels
    const skillTypeMapping = {
      type1: {
        1: { solErdaFragment: 5, solErda: 3 },
        2: { solErdaFragment: 8, solErda: 5 },
        // Add more levels as needed
      },
      type2: {
        1: { solErdaFragment: 4, solErda: 2 },
        2: { solErdaFragment: 7, solErda: 4 },
        // Add more levels as needed
      },
      // Add more types as needed
    };

    // Check if the selected skill type and level exist in the mapping
    if (skillTypeMapping[skillType] && skillTypeMapping[skillType][skillLevel]) {
      // Retrieve the amounts based on the selected skill type and level
      const { solErdaFragment, solErda } = skillTypeMapping[skillType][skillLevel];

      // Perform the calculation based on skillLevel
      const totalSolErdaFragment = solErdaFragment * skillLevel;
      const totalSolErda = solErda * skillLevel;

      // Update the result state
      setResult({ totalSolErdaFragment, totalSolErda });
    } else {
      console.error('Invalid skill type or level');
      // Reset the result state
      setResult(null);
    }
  };

  return (
    <div className="calculator-container">
      <div className="header-container">
        <img src={HexaIcon} alt="HexaIcon" className="Hexa-Icon" />
        <h2>Hexa Calculator</h2>
      </div>
      <div className="input-container">
        <label>
          Hexa Skill Type:
          <select value={skillType} onChange={handleSkillTypeChange}>
            <option value="Origin">Origin</option>
            <option value="Enhance">Enhance</option>
            <option value="Mastery">Mastery</option>
            <option value="Common">Common</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
        <label>
          Hexa Skill Level:
          <input
            type="number"
            value={skillLevel}
            onChange={handleSkillLevelChange}
            min="1"
            max="30"
          />
        </label>
      </div>
      <br />
      <button onClick={calculateResult}>Calculate</button>
      {/* Display the result in a nice container */}
      {result && (
        <div className="result-container">
          <div className="result-item">
            <img src={solErdaIcon} alt="Sol Erda Icon" className="result-icon" />
            <p>Total Sol Erda: {result.totalSolErda}</p>
          </div>
          <div className="result-item">
            <img src={solErdaFragmentIcon} alt="Sol Erda Fragment Icon" className="result-icon" />
            <p>Total Sol Erda Fragment: {result.totalSolErdaFragment}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HexaCalculator;
