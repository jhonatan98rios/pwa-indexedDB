//import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import { getData, setData } from './utils/storage'
import { networkStatus } from './utils/network'

import './styles/index.scss'

function App() {

  const [array, setArray] = useState(null)

  async function addItem() {
    let newData = 'Eu sou uma batata'

    setArray([
      ...array,
      newData
    ])
  }

  useEffect(() => {

    ;(async () => {
      await setData(array)
    })();
    
  }, [array])

  
  useEffect(() => {
    ;(async () => {
      networkStatus()

      let data = await getData()
      setArray(data)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h2> PWA Validator </h2>

        <ul>
          {
            array && array.map((arr, index) => (
              <li key={index}> {arr} </li>
            ))
          }
        </ul>

        <button 
          onClick={addItem}
        >
          Batata
        </button>
      </main>
    </div>
  );
}

export default App;
