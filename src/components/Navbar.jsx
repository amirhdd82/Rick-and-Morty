import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ numOfResult }) {
  return (
    <div className="navbar">
      <Logo />
      <Search />
      <div className="navbar__result">Found {numOfResult} character</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">4</span>
      </button>
    </div>
  );
}

function Logo() {
  return <div className="navbar__logo">LOGO🧌</div>;
}

function Search() {
  return <input type="text" className="text-field" placeholder="search..." />;
}

export default Navbar;
