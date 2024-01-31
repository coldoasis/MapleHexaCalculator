// HexaCalculator.js

import React, { useState } from 'react';
import './HexaCalculator.css'; // Import your CSS file

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
    // Perform your calculation based on skillType and skillLevel
    // For demonstration, let's just display the result in the console
    console.log(`Calculating result for Skill Type: ${skillType}, Skill Level: ${skillLevel}`);
    // Add your actual calculation logic here
  };

  return (
    <div className="calculator-container">
      <h2>Hexa Calculator</h2>
      <div className="input-container">
        <label>
          Hexa Skill Type:
          <select value={skillType} onChange={handleSkillTypeChange}>
            <option value="Origin">Type 1</option>
            <option value="Enhance">Type 2</option>
            <option value="Mastery">Type 3</option>
            <option value="Common">Type 4</option>
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
            min="0"
            max="30"
          />
        </label>
      </div>
      <br />
      <button onClick={calculateResult}>Calculate</button>
      {/* Display the result or other UI elements based on your calculation */}
    </div>
  );
}

export default HexaCalculator;
