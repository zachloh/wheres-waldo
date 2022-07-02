import { useState } from 'react';

const targetMarkerStyle = {
  position: 'absolute',
  height: '60px',
  transform: 'translate(-50%, -50%)',
  width: '60px',
  border: '3px dashed #f00',
  borderRadius: '50%',
  cursor: 'pointer',
};

export const useMarkTarget = () => {
  const [target, setTarget] = useState({
    show: false,
    markerStyle: {},
    dropDownStyle: {},
    markedPositions: {},
  });

  const markTarget = (x, y, imageHeight) => {
    setTarget((prev) => {
      if (prev.show) {
        return {
          show: false,
          markerStyle: {},
          dropDownStyle: {},
          markedPositions: {},
        };
      }

      return {
        show: true,
        markerStyle: {
          ...targetMarkerStyle,
          top: `${((y * imageHeight) / window.innerHeight) * 100}vh`,
          left: `${x * 100}vw`,
        },
        dropDownStyle: {
          position: 'absolute',
        },
        markedPositions: { x, y },
      };
    });
  };

  const unmark = () => {
    setTarget({
      show: false,
      markerStyle: {},
      dropDownStyle: {},
      markedPositions: {},
    });
  };

  return {
    target,
    markTarget,
    unmark,
  };
};
