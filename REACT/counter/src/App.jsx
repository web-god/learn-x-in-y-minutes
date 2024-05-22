import { useState } from 'react';
import './App.css'

function App() {
  
  //* 4.Hooks

  let [counter,setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if(counter<15){
    console.log("clicked",counter);
    // counter=counter+1;
    // setCounter(counter);
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
    

    }
    
  }

  
  const removeValue = () => {
    if(counter>0){
    setCounter(counter-1);
  }
}

  return (
    <>
      <h1>Learn React in y minutes</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      
      <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
