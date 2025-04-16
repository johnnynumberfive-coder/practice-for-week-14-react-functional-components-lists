import { moves } from "./data";

function PokeMoves() {
  return (
    <>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          <li>
            {item.id}. {item.move}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PokeMoves;
