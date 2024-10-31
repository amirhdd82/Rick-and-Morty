import Navbar, { SearchResult } from "./components/Navbar";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if(!res.ok) throw new Error("Something went wrong!")
        const data = await res.json();
        setCharacters(data.results.slice(0, 5));
        setIsLoading(false);
      } catch (error) {
        toast.error(error.message)
      }finally{
        setIsLoading(false)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <Main>
        <div className="main">
          <CharacterList characters={characters} isLoading={isLoading} />
          <CharacterDetail />
        </div>
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

export default App;
