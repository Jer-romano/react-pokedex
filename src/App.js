import logo from './logo.svg';
import './App.css';
import pokemon from './pokemon';
import Pokedex from './Pokedex';


function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;
