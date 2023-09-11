import React, { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState(null)
  const [binary, setBinary] = useState(null)
  const [decimal, setDecimal] = useState(null)

  const handleMode = (m) => {
    setMode(m)
    setBinary(null)
    setDecimal(null)
  }

  const handleBinary = (e) => {
    let bin = e.target.value
    if(!isNaN(parseInt(bin))){
      setDecimal(parseInt(bin, 2))
    }
  }

  const handleDecimal = (e) => {
    let dec = e.target.value
    if(!isNaN(parseInt(dec))){
      let binary2 = (dec % 2).toString();
    for (; dec > 1; ) {
        dec = parseInt(dec / 2);
        binary2 =  (dec % 2) + (binary2);
    }
    setBinary(binary2)
    }
  }

  const reset = () => {
    setMode(null)
    setBinary(null)
    setDecimal(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor de Binario a Decimal</h1>
        {mode !== 'bad' ? <button onClick={() => handleMode('bad')}>Binario a Decimal</button> : <></>}
        {mode !== 'dab' ? <button onClick={() => handleMode('dab')}>Decimal a Binario</button> : <></>}
        {mode === 'bad' 
          ? 
            <form>
              <label htmlFor='binario'>Binario: </label>
              <input name='binario' id='binario' onChange={e => handleBinary(e)} type='number' />
              <p>Por Favor, use sólo 1 o 0</p>
              <br/>
              <label htmlFor='decimal'>Decimal: </label>
              <span name='decimal'>{decimal}</span>
              <br/>
              <br/>
              <button onClick={reset}>Reset</button>
            </form>
          : mode === 'dab' 
            ?
              <form>
                <label htmlFor='decimal'>Decimal: </label>
                <input name='decimal' id='decimal' onChange={e => handleDecimal(e)} type='number'/>
                <br/>
                <p>Por Favor, use sólo numeros enteros</p>
                <br/>
                <label htmlFor='binario'>Binario: </label>
                <span name='binario'>{binary}</span>
                <br/>
                <br/>
                <button onClick={reset}>Reset</button>
                </form>
            : <></>}
      </header>
    </div>
  );
}

export default App;
