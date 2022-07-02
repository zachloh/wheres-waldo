import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ options }) => {
  return (
    <div className={styles.dropdown}>
      {options.map((option) => (
        <button key={option}>{option}</button>
      ))}
    </div>
  );
};

export default Dropdown;
