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

  return {
    targetStyle,
    markTarget,
  };
};
