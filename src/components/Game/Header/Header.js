import React from 'react';
import spiderman from '../../../assets/images/spiderman.png';
import phineas from '../../../assets/images/phineas.png';
import ash from '../../../assets/images/ash.png';
import styles from './Header.module.css';
import sf from 'seconds-formater';

const Header = ({ timer, imageFound }) => {
  return (
    <header className={styles.header}>
      <div className={styles.images}>
        <img
          src={spiderman}
          alt="spiderman"
          className={imageFound.Spiderman ? styles.found : ''}
        />
        <img
          src={phineas}
          alt="phineas"
          className={imageFound.Phineas ? styles.found : ''}
        />
        <img
          src={ash}
          alt="ash"
          className={imageFound.Ash ? styles.found : ''}
        />
      </div>
      <p className={styles.timer}>{sf.convert(timer).format()}</p>
    </header>
  );
};

export default Header;
