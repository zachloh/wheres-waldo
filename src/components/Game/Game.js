import React from 'react';
import { useMarkTarget } from '../../hooks/useMarkTarget';
import Header from './Header/Header';
import Dropdown from './Dropdown/Dropdown';
import background from '../../assets/images/background.jpg';
import styles from './Game.module.css';

const Game = () => {
  const { targetStyle, markTarget } = useMarkTarget();

  const handleClick = (e) => {
    const scrollY = (window.scrollY / window.innerHeight) * 100;
    const positionX = (e.clientX / window.innerWidth) * 100;
    const positionY = (e.clientY / window.innerHeight) * 100;
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
