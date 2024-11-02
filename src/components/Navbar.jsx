import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";

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

export function Favourites({ favourite }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal Onopen={setIsOpen} Open={isOpen} title="List of Favourites">
        {favourite.map((item) => (
          <Character
            item={item}
            onSelectCharacter={onSelectCharacter}
            selectedId={selectedId}
          />
        ))}
      </Modal>
      <button className="heart" onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favourite.length}</span>
      </button>
    </>
  );
}

export default Navbar;
