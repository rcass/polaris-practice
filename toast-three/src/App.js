import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [toastValues, setToastValues] = useState([]);

  function handleOnChange(e){
   setInputValue(e.target.value)
  }

  //TODO: clear input field onClick()
  function handleOnClick(){
    if(inputValue.trim() === ''){
      return
    }

    const updatedToastArray = toastValues.map(x => x);
    updatedToastArray.push(inputValue)

    setToastValues(updatedToastArray)
  }

  function handleClose(i){
    const updatedToastArray = toastValues.map(x => x);
    updatedToastArray.splice(i, 1);

    setToastValues(updatedToastArray);
  }

  return (
    <>
    <div className="App">
     <input type="text" onChange={handleOnChange}/>
     <button onClick={handleOnClick}>Submit</button>
    </div>

    {toastValues.map((value, i) => <div><button onClick={()=>{handleClose(i)}}>x</button>{value}</div>)}

    </>
  );
}

export default App;
