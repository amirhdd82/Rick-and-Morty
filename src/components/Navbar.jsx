import { HeartIcon } from "@heroicons/react/24/outline";


function Navbar({ children }) {
  return (
    <div className="navbar">
      <Logo />
      <Search />
      {children}
      <Favourites />
    </div>
  );
}

function Logo() {
  return <div className="navbar__logo">LOGO🧌</div>;
}

function Search() {
  return <input type="text" className="text-field" placeholder="search..." />;
}

export function SearchResult() {
  return <div className="navbar__result">Found {numOfResult} character</div>;
}

function Favourites() {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">4</span>
    </button>
  );
}

export default Navbar;
