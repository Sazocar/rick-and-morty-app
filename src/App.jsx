import './App.css'

function App() {
  return (
    <div className="container">
      <div className="image-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
      </div>
      <div className="info-container">
        <h2>Rick Sanchez</h2>
        <p>An eccentric and alcoholic scientist who is the father of Beth Smith, and the grandfather of Morty Smith and Summer Smith.</p>
        <ul>
          <li>Status: Alive</li>
          <li>Species: Human</li>
          <li>Gender: Male</li>
          <li>Origin: Earth (Replacement Dimension)</li>
          <li>Last known location: Space Rickcation</li>
        </ul>
      </div>
    </div>
  )
}

export default App
