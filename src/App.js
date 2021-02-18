import diff from "jest-diff";

function App() {
  return (<div>
    <p>Hello</p>
    <NumberBlock time = {3} unit = 'days'/>
    </div>);
}
 
const NumberBlock = (props) => {
  //I want to get the current date and the target date
  //subtract one from the other
  //do math to tell how many months, days, hour, mins, second are there
  const now = new Date().getTime();
  
  const destination = new Date("March 19, 2021 00:00").getTime();
  const difference = (destination - now)/1000;
  const monthTime = Math.floor(difference / (60 * 60 * 24 ))%12;
  const dayTime = Math.floor(difference / (60 * 60 * 24));
  const hourTime = Math.floor(difference / (3600)) % 24;
  const minTime = Math.floor(difference / 60) % 60;
  const secTime = Math.floor(difference % 60);

  console.log(now.getHour());
  console.log(destination.getHour());
  console.log(monthTime);
  console.log(dayTime);
  console.log(hourTime);
  console.log(minTime);
  console.log(secTime);
  // console.log(now);
  // console.log(difference);
  const {time,unit} = props;
  return <div>
    <div>{time}</div>
    <div>{unit}</div>
    </div>
}
export default App;
