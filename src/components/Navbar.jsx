import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ numOfResult }) {
  return (
    <div className="navbar">
      <Logo />
      <input type="text" className="text-field" placeholder="search..." />
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

export default Navbar;
