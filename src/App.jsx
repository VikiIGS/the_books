import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
    const shoot = () => {
    alert("Great Shot!");
  }
  return (
    <div className="App">
      <h1 onClick={shoot}>My car is {props.colour} colur {props.brand}</h1>
      <ul>
        {props.cars.map((car, index) => <li key={index}>{car}</li>)}
      </ul>
    </div>
  );
}

export default App;
