// HexaCalculator.js

import React, { useState } from 'react';
import './HexaCalculator.css';
import HexaIcon from './origin-skill.png';
import solErdaIcon from './sol-erda.png'; 
import solErdaFragmentIcon from './sol-erda-fragment.png';


function HexaCalculator() {
  // State to store user inputs
  const [skillType, setSkillType] = useState(''); // Default value is an empty string
  const [currentSkillLevel, setCurrentSkillLevel] = useState(0); // Default value is 0
  const [expectedSkillLevel, setExpectedSkillLevel] = useState(0); // Default value is 0
  const [result, setResult] = useState(null); // State to store the calculation result

  // Function to handle skill type change
  const handleSkillTypeChange = (event) => {
    setSkillType(event.target.value);
  };

  // Function to handle current skill level change
  const handleCurrentSkillLevelChange = (event) => {
    setCurrentSkillLevel(Number(event.target.value)); // Convert the input to a number
  };

  // Function to handle expected skill level change
  const handleExpectedSkillLevelChange = (event) => {
    setExpectedSkillLevel(Number(event.target.value)); // Convert the input to a number
  };

  // Function to perform the calculation
  const calculateResult = () => {
    // Skill type to amounts mapping with levels
    const skillTypeMapping = {
      Origin: {
        1: { solErdaFragment: 100, solErda: 5 },
        2: { solErdaFragment: 30, solErda: 1 },
        3: { solErdaFragment: 35, solErda: 1 },
        4: { solErdaFragment: 40, solErda: 1},
        5: { solErdaFragment: 45, solErda: 2 },
        6: { solErdaFragment: 50, solErda: 2 },
        7: { solErdaFragment: 55, solErda: 2 },
        8: { solErdaFragment: 60, solErda: 3 },
        9: { solErdaFragment: 65, solErda: 3 },
        10: { solErdaFragment: 200, solErda: 8 },
        11: { solErdaFragment: 80, solErda: 3 },
        12: { solErdaFragment: 90, solErda: 3 },
        13: { solErdaFragment: 100, solErda: 3 },
        14: { solErdaFragment: 110, solErda: 3 },
        15: { solErdaFragment: 120, solErda: 3 },
        16: { solErdaFragment: 130, solErda: 3 },
        17: { solErdaFragment: 140, solErda: 3 },
        18: { solErdaFragment: 150, solErda: 3 },
        19: { solErdaFragment: 160, solErda: 4 },
        20: { solErdaFragment: 350, solErda: 12 },
        21: { solErdaFragment: 170, solErda: 4},
        22: { solErdaFragment: 180, solErda: 4 },
        23: { solErdaFragment: 190, solErda: 4 },
        24: { solErdaFragment: 200, solErda: 4 },
        25: { solErdaFragment: 210, solErda: 4 },
        26: { solErdaFragment: 220, solErda: 5 },
        27: { solErdaFragment: 230, solErda: 5 },
        28: { solErdaFragment: 240, solErda: 5 },
        29: { solErdaFragment: 250, solErda: 6 },
        30: { solErdaFragment: 500, solErda: 15 },
        // Add more levels as needed
      },
      Enhance: {
        1: { solErdaFragment: 75, solErda: 3 },
        2: { solErdaFragment: 23, solErda: 1},
        3: { solErdaFragment: 27, solErda: 1 },
        4: { solErdaFragment: 30, solErda: 1 },
        5: { solErdaFragment: 34, solErda: 1 },
        6: { solErdaFragment: 38, solErda: 1 },
        7: { solErdaFragment: 42, solErda: 1 },
        8: { solErdaFragment: 45, solErda: 2 },
        9: { solErdaFragment: 49, solErda: 2 },
        10: { solErdaFragment: 150, solErda: 5 },
        11: { solErdaFragment: 60, solErda: 2 },
        12: { solErdaFragment: 68, solErda: 2 },
        13: { solErdaFragment: 75, solErda: 2 },
        14: { solErdaFragment: 83, solErda: 2 },
        15: { solErdaFragment: 90, solErda: 2 },
        16: { solErdaFragment: 98, solErda: 2 },
        17: { solErdaFragment: 105, solErda: 2 },
        18: { solErdaFragment: 113, solErda: 2 },
        19: { solErdaFragment: 120, solErda: 3 },
        20: { solErdaFragment: 263, solErda: 3 },
        21: { solErdaFragment: 128, solErda: 3 },
        22: { solErdaFragment: 135, solErda: 3 },
        23: { solErdaFragment: 143, solErda: 3 },
        24: { solErdaFragment: 150, solErda: 3 },
        25: { solErdaFragment: 158, solErda: 3 },
        26: { solErdaFragment: 165, solErda: 3 },
        27: { solErdaFragment: 173, solErda: 3 },
        28: { solErdaFragment: 180, solErda: 3 },
        29: { solErdaFragment: 188, solErda: 3 },
        30: { solErdaFragment: 375, solErda: 10 },
        // Add more levels as needed
      },
      Mastery: {
        1: { solErdaFragment: 50, solErda: 1 },
        2: { solErdaFragment: 15, solErda: 1 },
        3: { solErdaFragment: 18, solErda: 1 },
        4: { solErdaFragment: 20, solErda: 1 },
        5: { solErdaFragment: 23, solErda: 1 },
        6: { solErdaFragment: 25, solErda: 1 },
        7: { solErdaFragment: 28, solErda: 1 },
        8: { solErdaFragment: 30, solErda: 2 },
        9: { solErdaFragment: 33, solErda: 2 },
        10: { solErdaFragment: 100, solErda: 5 },
        11: { solErdaFragment: 40, solErda: 2 },
        12: { solErdaFragment: 45, solErda: 2 },
        13: { solErdaFragment: 50, solErda: 2 },
        14: { solErdaFragment: 55, solErda: 2 },
        15: { solErdaFragment: 60, solErda: 2 },
        16: { solErdaFragment: 65, solErda: 2 },
        17: { solErdaFragment: 70, solErda: 2 },
        18: { solErdaFragment: 75, solErda: 2 },
        19: { solErdaFragment: 80, solErda: 3 },
        20: { solErdaFragment: 175, solErda: 8 },
        21: { solErdaFragment: 85, solErda: 3 },
        22: { solErdaFragment: 90, solErda: 3 },
        23: { solErdaFragment: 95, solErda: 3 },
        24: { solErdaFragment: 100, solErda: 3 },
        25: { solErdaFragment: 105, solErda: 3 },
        26: { solErdaFragment: 110, solErda: 3 },
        27: { solErdaFragment: 115, solErda: 3 },
        28: { solErdaFragment: 120, solErda: 3 },
        29: { solErdaFragment: 125, solErda: 3 },
        30: { solErdaFragment: 250, solErda: 10 },
        // Add more levels as needed
      },
      Common: {
        1: { solErdaFragment: 125, solErda: 7 },
        2: { solErdaFragment: 38, solErda: 2 },
        3: { solErdaFragment: 44, solErda: 2 },
        4: { solErdaFragment: 50, solErda: 2 },
        5: { solErdaFragment: 57, solErda: 3 },
        6: { solErdaFragment: 63, solErda: 3 },
        7: { solErdaFragment: 69, solErda: 3 },
        8: { solErdaFragment: 75, solErda: 5 },
        9: { solErdaFragment: 82, solErda: 5 },
        10: { solErdaFragment: 300, solErda: 14 },
        11: { solErdaFragment: 110, solErda: 5 },
        12: { solErdaFragment: 124, solErda: 5 },
        13: { solErdaFragment: 138, solErda: 6 },
        14: { solErdaFragment: 152, solErda: 6 },
        15: { solErdaFragment: 165, solErda: 6 },
        16: { solErdaFragment: 179, solErda: 6 },
        17: { solErdaFragment: 193, solErda: 6 },
        18: { solErdaFragment: 207, solErda: 6 },
        19: { solErdaFragment: 220, solErda: 7 },
        20: { solErdaFragment: 525, solErda: 17 },
        21: { solErdaFragment: 234, solErda: 7},
        22: { solErdaFragment: 248, solErda: 7 },
        23: { solErdaFragment: 262, solErda: 7 },
        24: { solErdaFragment: 275, solErda: 7 },
        25: { solErdaFragment: 289, solErda: 7 },
        26: { solErdaFragment: 303, solErda: 9 },
        27: { solErdaFragment: 317, solErda: 9 },
        28: { solErdaFragment: 330, solErda: 9 },
        29: { solErdaFragment: 344, solErda: 10 },
        30: { solErdaFragment: 750, solErda: 20},
        // Add more levels as needed
      },
      // Add more types as needed
    };

    // Check if the selected skill type and levels exist in the mapping
  if (
    skillTypeMapping[skillType] &&
    skillTypeMapping[skillType][currentSkillLevel] &&
    skillTypeMapping[skillType][expectedSkillLevel]
  ) {
    // Retrieve the amounts based on the selected skill type and levels
    const { solErdaFragment: currentSolErdaFragment, solErda: currentSolErda } = skillTypeMapping[skillType][currentSkillLevel];

    // Initialize variables to store the total amounts
    let totalSolErdaFragment = 0;
    let totalSolErda = 0;

    // Iterate through the levels starting from currentSkillLevel + 1 up to expectedSkillLevel
    for (let level = currentSkillLevel + 1; level <= expectedSkillLevel; level++) {
      const { solErdaFragment, solErda } = skillTypeMapping[skillType][level];
      totalSolErdaFragment += solErdaFragment;
      totalSolErda += solErda;
    }

    // Update the result state
    setResult({
      totalSolErdaFragment,
      totalSolErda,
    });
  } else {
    console.error('Invalid skill type or levels');
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
          Current Hexa Skill Level:
          <input
            type="number"
            value={currentSkillLevel}
            onChange={handleCurrentSkillLevelChange}
            min="1"
            max="30"
          />
        </label>
        <br />
        <label>
          Expected Hexa Skill Level:
          <input
            type="number"
            value={expectedSkillLevel}
            onChange={handleExpectedSkillLevelChange}
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
