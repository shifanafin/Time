import React,{useState} from 'react'
import './App.css';

function App() 

{
  const now = new Date().toLocaleTimeString();

  const [time,setTime]= useState(now);


  function timeGet()
  {
    
      let timeupdate = new Date().toLocaleTimeString();
      setTime(timeupdate)

  }
 
  return (

    <div className="container">
      <h1>{time}</h1>
      <button onClick={timeGet}>Get Time</button>

    </div>
  );
}

export default App;
