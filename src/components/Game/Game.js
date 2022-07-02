import React, { useState } from 'react';
import Header from './Header/Header';
import Dropdown from './Dropdown/Dropdown';
import background from '../../assets/images/background.jpg';
import styles from './Game.module.css';
import { doc } from 'firebase/firestore';

const targetMarkerStyle = {
  position: 'absolute',
  height: '60px',
  transform: 'translate(-50%, -50%)',
  width: '60px',
  border: '3px dashed #f00',
  borderRadius: '50%',
  cursor: 'pointer',
};

const characterDropDownStyle = {};

const Game = () => {
  const [targetStyle, setTargetStyle] = useState({
    show: false,
    markerStyle: {},
    dropDownStyle: {},
  });

  const markTarget = (x, y) => {
    setTargetStyle((prev) => {
      if (prev.show) {
        return {
          show: false,
          markerStyle: {},
          dropDownStyle: {},
        };
      }

      return {
        show: true,
        markerStyle: {
          ...targetMarkerStyle,
          top: `${y}vh`,
          left: `${x}vw`,
        },
        dropDownStyle: {
          position: 'absolute',
        },
      };
    });
  };

  const handleClick = (e) => {
    const scrollY = (window.scrollY / window.innerHeight) * 100;
    const positionX = (e.clientX / window.innerWidth) * 100;
    const positionY = (e.clientY / window.innerHeight) * 100;
    console.log(positionX, positionY + scrollY);
    markTarget(positionX, positionY + scrollY);
  };

  return (
    <div className={styles.container}>
      <Header />
      <img
        src={background}
        alt="cyberpunk themed poster"
        className={styles.background}
        onClick={handleClick}
      />
      <div style={targetStyle.markerStyle}>
        {targetStyle.show && (
          <Dropdown options={['Spiderman', 'Phineas', 'Ash']} />
        )}
      </div>
    </div>
  );
};

export default Game;
