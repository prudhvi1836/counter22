import React,{useState} from 'react';
import './App.css';
import Button from './components/Button';
// import Input from './components/Input';
function App() {
  // let intervalID= 0;  wrong way of doing things we have to use state
  const[intervalID, setIntervalID] =useState(0);
  const [currState, setState] = useState(0);
  const startFunction = ()=>{
            clearInterval(intervalID); //fixes speeding of the counter value when we double click start
            let intervalOne = setInterval(()=>{
                  setState((prevState)=>prevState+1)
                  console.log("Counter is",currState);
              },1000);
              setIntervalID(intervalOne);
  }

  const stopFunction = ()=>{
          clearInterval(intervalID);
  }
  
  const  resetFunction = ()=>{
    window.location.reload();
  }

//  const[currState, setState] = useState();
//  const[intervalID, setIntervalID] =useState(0);

//  const onChangeHandlerFunction =(e) =>{
//   setState(e.target.value);
//  }
//  const  startButtonFunction = ()=>{
//   clearInterval(intervalID);
//   let intervalOne = setInterval(()=>{
//                     setState((prevState)=>prevState-1)
//                 },1000);
//   setIntervalID(intervalOne);
// }
// if(currState === 0){
//   clearInterval(intervalID);
// }


  return (
    <div>
    <h3>Counter App</h3>
    <Button onClickHandler={startFunction} btnText="start"/>
    <p>{currState}</p>
    <Button onClickHandler={stopFunction} btnText="Stop"/>
    <Button onClickHandler={resetFunction} btnText="reset"/>


   {/* <Input specifyType="text" giveValue = {currState} onChangeHandler ={onChangeHandlerFunction}/>
   <Button onClickHandler={startButtonFunction} btnText="start"/>
   <p>{currState}</p> */}

    </div>
  );
}

export default App;
