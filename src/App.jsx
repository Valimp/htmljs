import './App.css'
import { useState } from 'react';
import Button from './components/Button.jsx';

function App() {

  const [count, setCount] = useState(0);



  return (
    <div>
      <Button count={count} setCount={setCount} label="-3" value={-3} />
      <Button count={count} setCount={setCount} label="-" value={-1} />
      <Button count={count} setCount={setCount} label="Reset" value={0} />
      <Button count={count} setCount={setCount} label="+" value={1} />
      <Button count={count} setCount={setCount} label="+3" value={3} />
      <p>Compteur : {count}</p>
    </div>
  )
}

export default App
