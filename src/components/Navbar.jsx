import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterList";

function Navbar({ children }) {
  return (
    <div className="navbar">
      <Logo />
      {children}
    </div>
  );
}

function Logo() {
  return <div className="navbar__logo">LOGO🧌</div>;
}

export function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      className="text-field"
      placeholder="search..."
    />
  );
}

export function SearchResult({ numOfResult }) {
  return <div className="navbar__result">Found {numOfResult} character</div>;
}

export function Favourites({ favourites }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal Onopen={setIsOpen} Open={isOpen} title="List of Favourites">
        {favourites.map((item) => (
          <Character key={item.id } item={item} selectedId="1" onSelectCharacter={() => {}} />
        ))}
      </Modal>

      <button className="heart" onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favourites.length}</span>
      </button>
    </>
  );
}

export default Navbar;
