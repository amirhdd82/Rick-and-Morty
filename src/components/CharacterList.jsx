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
    </div>
  );
}

export default CharacterList;
