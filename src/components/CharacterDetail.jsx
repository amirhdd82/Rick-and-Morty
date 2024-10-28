import { character } from "../../data/data";

function CharacterDetail() {
  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-episodes"></div>
    </div>
  );
}

export default CharacterDetail;
