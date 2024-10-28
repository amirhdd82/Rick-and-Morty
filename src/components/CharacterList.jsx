function CharacterList({ characters }) {
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
        <span>{item.gender === "Male" ? "🧔🏻‍♂️" : "👩🏻‍🦱"}</span>
        <span>{item.name}</span>
      </h3>
    </div>
  );
}

export default CharacterList;
