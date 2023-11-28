
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  const btn = document.querySelector('button');

  function btnClick(){
    counter = counter + 1;
    setCounter(counter)
    console.log("clicked " , counter);
  }


  return (
    

    <>
    <div className="container">
      <button className='counterBtn' onClick={btnClick}>Count : {counter}</button>
    </div>
    </>
  )
}

export default App
