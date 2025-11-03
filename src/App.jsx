import './App.css'
import { useState, useMemo } from 'react';
import Button from './components/Button.jsx';

function App() {

  const [number, setNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);
  function calculComplique(number) {
    return number * 2;
  }

  const resultat = useMemo(() => calculComplique(number), [number]);

  return (
    <div>
      <p>Résultat : {resultat}</p>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(parseInt(e.target.value, 10))}
      />
        <button onClick={
          () => setNumber(inputNumber)
        }>Calculer</button>
      </div>
  )
}

export default App
