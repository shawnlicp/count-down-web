
import diff from "jest-diff";
import React, {useRef,useState, useEffect} from 'react';

function App() {
  

  const [dayTime,setDayTime] = useState(0);
  const [hourTime,setHourTime] = useState(0);
  const [minTime,setMinTime] = useState(0);
  const [secTime,setSecTime] = useState(0);
  let interval = useRef();
  const startTimer = () => {
    
    const destination = new Date("February 18, 2021 14:56").getTime();
    const now = new Date().getTime();
    const difference = (destination - now)/1000;
    interval = setInterval(() => {
      
      if(difference<0){
        console.log("hi")
        clearInterval(interval);
      }
      else{
        setDayTime(Math.floor(difference / (60 * 60 * 24)));
        setHourTime( Math.floor(difference / (3600)) % 24);
        setMinTime(  Math.floor(difference / 60) % 60);
        setSecTime(  Math.floor(difference % 60));
      }
    }, 1000);
  }

  useEffect(()=>{
    startTimer();
    return ()=> clearInterval(interval);
  });
  
  return (
    <div>
      
      <NumberBlock time = {dayTime} unit = 'day'/>
      <NumberBlock time = {hourTime} unit = 'hour'/>
      <NumberBlock time = {minTime} unit = 'min'/>
      <NumberBlock time = {secTime} unit = 'sec'/>
    </div>
    );
}


const NumberBlock = (props) => {
  
 
  const {time,unit} = props;
  return <div>
    <div>{time}</div>
    <div>{unit}</div>
    </div>
}
export default App;
