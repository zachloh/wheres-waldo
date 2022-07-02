import { useState } from 'react';
import Introduction from './components/Introduction/Introduction';
import Game from './components/Game/Game';

function App() {
  const [gameStart, setGameStart] = useState(false);

  const handleGameStart = () => setGameStart(true);

  return (
    <>
      {!gameStart && <Introduction onGameStart={handleGameStart} />}
      {gameStart && <Game />}
    </>
  );
}

export default App;
