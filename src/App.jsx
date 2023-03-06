import { useEffect, useReducer, useState } from 'react'
import { urlFetch } from './services/api'
import { characterReducer } from './reducer/characterReducer'
import './App.css'

function App() {

  const [state, dispatch] = useReducer(characterReducer, 1)
  const [data, setData] = useState([])

  const getCharacter = async (characterID) => {
    const response = await urlFetch(characterID)
    setData(response)
    console.log(response)
  }

  const handleDecrement = () => {
    dispatch({ type: 'decrementCounter' })
  }
  const handleIncrement = () => {
    dispatch({ type: 'incrementCounter' })
  }

  useEffect(() => {
    getCharacter(state)
  }, [state])

  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="info-container">
          <h2>{data.name}</h2>
          <ul>
            <li>{`Status: ${data.status}`}</li>
            <li>{data.species}</li>
            <li>{`Gender: ${data.gender}`}</li>
            <li>{`Origin: ${data.origin?.name}`}</li>
            <li>{`Last known location: ${data.location?.name}`}</li>
          </ul>
        </div>
      </div>
      <section className="button-container">
        <button disabled={state === 1 } onClick={handleDecrement}>Previous</button>
        <button onClick={handleIncrement}>Next</button>

      </section>
    </>
  )
}

export default App
