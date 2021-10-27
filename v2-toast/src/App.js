import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toasts, setToasts] = useState([]);

 const onChange = (e) => {
   setInputValue(e.target.value)
   //console.log(inputValue)
 }

 const submitButton = () => {
    setToasts(inputValue)
 }

  return (
    <div className="App">
      <header className="App-header">
      <input type="text" onChange={onChange} />
      <button type="submit" onClick={submitButton}>show toast</button>
     {toasts ? 
      <div>{inputValue}</div>
      : null}

      </header>
    </div>
  );
}

export default App;
