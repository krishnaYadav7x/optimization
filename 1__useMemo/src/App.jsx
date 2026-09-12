
import { useMemo, useState } from 'react';
import './App.css'

function App() {
const [count,setCount] = useState(0)
const [inputValue,setInputValue] = useState(0)

const handleClick = ()=>{
  setCount(count+1)
}
const expensiveTask = (n)=>{
  const startTime = Date.now()
  let currenTime = startTime
  while(startTime+500>currenTime){
    currenTime = Date.now()
  }
  return n**2
}
// let power = expensiveTask(inputValue)

let power = useMemo(() => expensiveTask(inputValue),[inputValue]);
  return (
    <>
      <h1>useMemo</h1>
      <div>
        <button onClick={handleClick}>Increase</button>
        <div className="counter">Count: {count}</div>
        <input type="number" placeholder="enter number" value={inputValue} onChange={(e)=>{
          setInputValue(e.target.value)
        }}/>

        <div>{power}</div>
      </div>
    </>
  );
}

export default App
