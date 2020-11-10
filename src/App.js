
import './App.css';

// Importaciones propias
import Home from './components/pages/Home/Home';

// Contextos
import PlayersState from './context/playerContext/playersState';

function App() {
  return (
    <PlayersState>
      <Home />
    </PlayersState>
  );
}

export default App;
