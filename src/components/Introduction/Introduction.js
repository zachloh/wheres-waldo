import React from 'react';
import background from '../../assets/images/background.jpg';
import spiderman from '../../assets/images/spiderman.png';
import phineas from '../../assets/images/phineas.png';
import ash from '../../assets/images/ash.png';
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <img
        src={background}
        alt="cyberpunk themed poster"
        className={styles.background}
      />
      <div className={styles.instructions}>
        <p>Tag these characters as fast as you can!</p>
        <div className={styles.characters}>
          <div className={styles.character}>
            <img src={spiderman} alt="Spiderman" />
            <p>Spiderman</p>
          </div>
          <div className={styles.character}>
            <img src={phineas} alt="Phineas" />
            <p>Phineas</p>
          </div>
          <div className={styles.character}>
            <img src={ash} alt="Ash" />
            <p>Ash</p>
          </div>
        </div>
        <button className={styles.start}>Start Game</button>
      </div>
    </div>
  );
};

export default Introduction;
