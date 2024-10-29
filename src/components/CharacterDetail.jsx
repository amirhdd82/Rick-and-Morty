import { character } from "../../data/data";
import {ArrowUpCircleIcon} from "@heroicons/react/24/outline"


function CharacterDetail() {
  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character.image}
          alt={character.name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender === "Male" ? "🧔🏻‍♂️" : "👩🏻‍🦱"}</span>
            <span> {character.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${character.status === "Dead" ? "red" : ""}`}
            ></span>
            <span> {character.status}</span>
            <span> - {character.species}</span>
          </div>
          <div className="location">
            <p>last known location:</p>
            <p>{character.location.name}</p>
          </div>
          <div className="actions">
            <button className="btn btn--primary">Add to Favourite</button>
          </div>
        </div>
      </div>
      <div className="character-episodes">
        <h2>list of episodes</h2>
        <button>
          <ArrowUpCircleIcon className="icon"/>
        </button>
      </div>
    </div>
  );
}

export default CharacterDetail;
