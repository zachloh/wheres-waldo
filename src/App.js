import { useState } from 'react';
import { useFetchPositions } from './hooks/useFetchPositions';
import Introduction from './components/Introduction/Introduction';
import Spinner from './components/Spinner/Spinner';
import Game from './components/Game/Game';

function App() {
  const { positions, isLoading } = useFetchPositions();

  const [gameStart, setGameStart] = useState(false);

  const handleGameStart = () => setGameStart(true);

  return (
    <>
      {!gameStart && <Introduction onGameStart={handleGameStart} />}
      {gameStart && isLoading && <Spinner />}
      {gameStart && !isLoading && (
        <Game
          spidermanPositions={positions[0]}
          phineasPositions={positions[1]}
          ashPositions={positions[2]}
        />
      )}
    </>
  );
}

export default App;
