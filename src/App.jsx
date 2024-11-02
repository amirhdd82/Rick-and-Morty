import Navbar, { Favourites, Search, SearchResult } from "./components/Navbar";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Modal from "./components/Modal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favourites, setFavourite] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal }
        );

        setCharacters(data.results.slice(0, 5));
        // setIsLoading(false);
      } catch (error) {
        setCharacters([]);
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  const handleSelectCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleDeleteFavourite = (id) => {
    setFavourite((prevFav) => prevFav.filter((fav) => fav.id !== id ));
  };

  const handleOnAddFavourite = (char) => {
    setFavourite((prevFav) => [...prevFav, char]);
  };

  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId);

  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
        <Favourites favourites={favourites} onDeleteFavourite={handleDeleteFavourite}/>
      </Navbar>
      <Main>
        <div className="main">
          <CharacterList
            selectedId={selectedId}
            characters={characters}
            isLoading={isLoading}
            onSelectCharacter={handleSelectCharacter}
          />
          <CharacterDetail
            selectedId={selectedId}
            onAddFavourite={handleOnAddFavourite}
            isAddToFavourite={isAddToFavourite}
          />
        </div>
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

export default App;
