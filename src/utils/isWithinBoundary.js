export const isWithinBoundary = (markedPositions, correctPositions) => {
  if (
    markedPositions.x >= correctPositions.x[0] &&
    markedPositions.x <= correctPositions.x[1] &&
    markedPositions.y >= correctPositions.y[0] &&
    markedPositions.y <= correctPositions.y[1]
  ) {
    return true;
  }
  return false;
};
