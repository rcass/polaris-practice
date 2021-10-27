import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [inputValue, setInputValue] = useState('');
 const [toastState, setToastState] = useState([]);


 const onChange = (event) => {
  const value = event.target.value;
  setInputValue(value);
  console.log(inputValue)
 }

 const onSubmit = (event) => {
   //alert('Submitting this' + inputValue);

   // Idiomatic way to make an array copy
   const newToastState = [...toastState];
   // Push new state item to copy
   newToastState.push(inputValue);
   // Update state to the copy reference
   setToastState(newToastState);

  
   event.preventDefault();
 }





  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div class="form-example">
          <input type="text" value={inputValue} onChange={onChange}/>
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
      <div className="toastContainer">

      {toastState.map(i => <div><h1>{i}</h1></div>)}
      </div>
    </div>
    
  );
}

export default App;
