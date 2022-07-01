import { useState } from 'react';
import Introduction from './components/Introduction/Introduction';

function App() {
  const [gameStart, setGameStart] = useState(false);

  return <>{!gameStart && <Introduction />}</>;
}

export default App;
