import React, {useState}from 'react';
import './App.css';
import Button from './components/Button';
function App() {
  // let intervalID= 0;  wrong way of doing things we have to use state
  const[intervalID, setIntervalID] =useState(0);
  const [currState, setState] = useState(0);
  const startFunction = ()=>{
 let intervalID = setInterval(()=>{
      setState((prevState)=>prevState+1)
  },1000);
  setIntervalID(intervalID);
  }

  const stopFunction = ()=>{
   clearInterval(intervalID);
    }
  
  const  resetFunction = ()=>{
    window.location.reload();
  }
  return (
    <div>
      <h3>Counter App</h3>
    <Button onClickHandler={startFunction} btnText="start"/>
    <p>{currState}</p>
    <Button onClickHandler={stopFunction} btnText="Stop"/>
    <Button onClickHandler={resetFunction} btnText="reset"/>

    </div>
  );
}

export default App;
