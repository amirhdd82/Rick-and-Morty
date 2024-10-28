import Navbar from "./components/Navbar";
import {characters} from "./data/data"
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={characters}/>
        <CharacterDetail />
      </div> 
    </div>
  );
}

export default App;
