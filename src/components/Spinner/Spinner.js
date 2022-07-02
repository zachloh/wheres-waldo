import React from 'react';
import background from '../../assets/images/background.jpg';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div>
      <img
        src={background}
        alt="cyberpunk themed poster"
        className={styles.background}
      />
      <svg
        viewBox="0 0 24 24"
        xmlns="<http://www.w3.org/2000/svg>"
        height="100px"
        width="100px"
        className={styles.spinner}
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#ccc"
          fill="none"
          className={styles.main}
        />
      </svg>
    </div>
  );
};

export default Spinner;
