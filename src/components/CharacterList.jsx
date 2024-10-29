import {EyeIcon} from "@heroicons/react/24/outline"
import {Allcharacters} from "../data/data"
import { useState } from "react";


function CharacterList({ characters }) {
  const [characters, setCharacters] = useState(Allcharacters)
  return (
    <div className="characters-list">
      {characters.map((item) => (
        <Character key={item.id} item={item} />
      ))}
    </div>
  );
}

function Character({ item }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <h3 className="name">
        <span> {item.gender === "Male" ? "🧔🏻‍♂️" : "👩🏻‍🦱"}</span>
        <span>{item.name}</span>
      </h3>
      <div className="list-item__info info">
        <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
        <span> {item.status}</span>
        <span> - {item.species}</span>
      </div>
      <button className="icon red">
        <EyeIcon />
      </button>
    </div>
  );
}

export default CharacterList;
