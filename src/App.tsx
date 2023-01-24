import './App.css';

import { useState } from 'react';

import logo from './assets/logo.png';
import { useListCharacterQuery } from './services/characters';

function App() {
  const [page, setPage] = useState(2);
  const { data: characters, isLoading } = useListCharacterQuery(page);
  console.log(characters);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!characters?.results) {
    return <div>No posts :(</div>;
  }

  return (
    <div>
      <img src={logo} alt="logo" />
      <button onClick={() => setPage((prev) => prev - 1)}>prev</button>
      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
      {characters.info.pages} <br />
      {characters.info.count}
      <div className="box-img">
        {characters.results.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <div>{character.name}</div>
          </div>
        ))}

        <div></div>
      </div>
    </div>
  );
}

export default App;
