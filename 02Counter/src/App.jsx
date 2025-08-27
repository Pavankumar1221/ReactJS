import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  // let count=10;

  const addValue=()=>{
    // console.log("Value added: ", Math.random());
    console.log("Button Clicked!! -> ", count);
    if(count>=10){
      console.log("Not allowed to go more than 10")
    }else{
      count=count+1;
      setCount(count);
    }
  }

  const decValue=()=>{
    // setCount(count-1);
    if(count<=0){
      console.log("Negative vals are not allowed.");
    }else{
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
