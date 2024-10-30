import Navbar, { SearchResult } from "./components/Navbar";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useState } from "react";
import { Allcharacters } from "../data/data";
function App() {
  const [characters, setCharacters] = useState(Allcharacters );

  return (
    <div className="app">
      <Navbar>
        <SearchResult numOfResult={characters.length}/>
      </Navbar>
      <Main>
      <div className="main">
        <CharacterList characters={characters }/>
        <CharacterDetail />
      </div>
      </Main>
    </div>
  );
}

function Main({children}){
  return (
    <div className="main">
      {children}
    </div>
  )
}

export default App;
