import {heatIcon} from "@heroicons/react/outline/24"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">LOGO🧌</div>
      <input type="text" className="text-field" placeholder="search..." />
      <div className="navbar__result">Found X character</div>
      
    </div>
  );
}

export default Navbar;
