import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ options, onClick, positionX, onUnmark }) => {
  const handleClick = (e) => {
    onClick(e.target.textContent);
    onUnmark();
  };

  return (
    <div
      className={`${styles.dropdown} ${
        positionX > 0.5 ? styles.right : styles.left
      }`}
    >
      {options.map((option) => (
        <button key={option} onClick={handleClick}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
