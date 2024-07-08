import React, { useState } from 'react';
import { FaCode, FaBrain, FaLaptopCode, FaPaintBrush, FaFeatherAlt, FaPenNib } from 'react-icons/fa'; // Import necessary icons
import '../styles/connectedButtons.css';

function ConnectedButtons() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const renderLetter = (category) => {
    if (selectedCategory === category) {
      return (
        <div className="selected-indicator">
          {category}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='block w-1/3 absolute pt-40 right-10 md:left-0 md:w-2/3 md:mx-10'>
      <div className="flex w-full justify-around py-5">
        <button className="button-white" onClick={() => handleButtonClick('Full Stack Developement')}><FaCode /></button> {/* Full Stack Web Development */}
        <button className="button-white" onClick={() => handleButtonClick('Machine Learning')}><FaBrain /></button> {/* Machine Learning */}
        <button className="button-white" onClick={() => handleButtonClick('Software Devlopement')}><FaLaptopCode /></button> {/* Software Development */}
      </div>
      <div className="flex w-full justify-around py-5">
        <button className="button-white" onClick={() => handleButtonClick('UI/UX Design')}><FaPaintBrush /></button> {/* UI/UX Design */}
        <button className="button-white" onClick={() => handleButtonClick('Content Creation')}><FaFeatherAlt /></button> {/* Poetry Writing */}
        <button className="button-white" onClick={() => handleButtonClick('Poetry Writing')}><FaPenNib /></button> {/* Content Creation */}
      </div>
      {selectedCategory && (
        <div className="indicator-container">
          <div className="selected-indicator">
            {selectedCategory}
          </div>
        </div>
      )}
    </div>
  );
}

export default ConnectedButtons;
