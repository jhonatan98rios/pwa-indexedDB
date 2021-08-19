import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { set, get } from 'idb-keyval';

function App() {

  const [data, setData] = useState('')

  useEffect(() => {
    ;(async () => {
      let batata = await get('batata')

      if (batata) {
        setData(batata)

      } else {
        await set('batata', 'Eu sou uma batata')
      }
    })()

  }, [])

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>

        <h2> {data} </h2>

      </main>
    </div>
  );
}

export default App;
