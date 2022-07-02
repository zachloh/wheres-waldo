import React, { useEffect, useState } from 'react';
import { useMarkTarget } from '../../hooks/useMarkTarget';
import { useInterval } from '../../hooks/useInterval';
import { isWithinBoundary } from '../../utils/isWithinBoundary';
import Header from './Header/Header';
import Dropdown from './Dropdown/Dropdown';
import background from '../../assets/images/background.jpg';
import styles from './Game.module.css';
import sf from 'seconds-formater';

const Game = ({ spidermanPositions, phineasPositions, ashPositions }) => {
  const { target, markTarget, unmark } = useMarkTarget();
  const { timer, reset, stop } = useInterval();
  const [imageFound, setImageFound] = useState({
    Spiderman: false,
    Phineas: false,
    Ash: false,
  });
  const [isGameOver, setIsGameOver] = useState(false);

  const handleClick = (e) => {
    const positionX = e.clientX / window.innerWidth;
    const positionY = (window.scrollY + e.clientY) / e.target.clientHeight;
    markTarget(positionX, positionY, e.target.clientHeight);
  };

  const checkIsFound = (character) => {
    if (
      (character === 'Spiderman' &&
        isWithinBoundary(target.markedPositions, spidermanPositions)) ||
      (character === 'Phineas' &&
        isWithinBoundary(target.markedPositions, phineasPositions)) ||
      (character === 'Ash' &&
        isWithinBoundary(target.markedPositions, ashPositions))
    ) {
      setImageFound((prev) => {
        return {
          ...prev,
          [character]: true,
        };
      });
    }
  };

  useEffect(() => {
    const isFound = Object.values(imageFound);
    const isGameOver = isFound.every((item) => item === true);
    if (isGameOver) {
      setIsGameOver(true);
      stop();
    }
  }, [imageFound, stop]);

  const handleReset = () => {
    reset();
    unmark();
    setImageFound({
      Spiderman: false,
      Phineas: false,
      Ash: false,
    });
    setIsGameOver(false);
  };

  let content;
  if (!isGameOver) {
    content = (
      <>
        <img
          src={background}
          alt="cyberpunk themed poster"
          className={styles.background}
          onClick={handleClick}
        />
        <div style={target.markerStyle}>
          {target.show && (
            <Dropdown
              options={['Spiderman', 'Phineas', 'Ash']}
              onClick={checkIsFound}
              positionX={target.markedPositions.x}
              onUnmark={unmark}
            />
          )}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <img
          src={background}
          alt="cyberpunk themed poster"
          className={styles.blur}
        />
        <div className={styles.end}>
          <p>YOUR TIME:</p>
          <p>{sf.convert(timer).format()}</p>
          <button className={styles.restart} onClick={handleReset}>
            Play again
          </button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Header timer={timer} imageFound={imageFound} />
      {content}
    </div>
  );
};

export default Game;
