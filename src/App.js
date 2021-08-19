//import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import InstallPWA from './components/InstallPWA'
import { getData, setData } from './utils/storage'
import { networkStatus } from './utils/network'

import './styles/index.scss'

function App() {

  const [array, setArray] = useState(null)

  async function addItem() {
    let newData = 'Eu sou uma batata 1'

    setArray([
      ...array,
      newData
    ])
  }

  useEffect(() => {

    ;(async () => {
      try {
        await setData(array)

      } catch (error) {
        console.log(error)
  
      } finally { 
        console.log('Done')
      }
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
        <InstallPWA />
      </main>
    </div>
  );
}

export default App;
