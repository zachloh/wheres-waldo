import React from 'react';
import spiderman from '../../../assets/images/spiderman.png';
import phineas from '../../../assets/images/phineas.png';
import ash from '../../../assets/images/ash.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.images}>
        <img src={spiderman} alt="spiderman" />
        <img src={phineas} alt="phineas" />
        <img src={ash} alt="ash" />
      </div>
      <p className={styles.timer}>00:00:00</p>
    </header>
  );
};

export default Header;
