import logo from './logo.svg';
import './App.css';
// import React from 'react';
import React from 'react';
import { createStore } from 'redux';

function App() {
  let clickFN = () => {
    console.log("Hello World!!!")
    let add = document.createElement("h1")
    add.textContent = "Hello World!!!"
    document.body.append(add)

  }

  return (
    <div className="App">
      <div className='back' >
        rexab
        <p>

        </p>
        <button onClick={clickFN} >Click</button>
        <p></p>
        <p></p>
        <p></p>
      </div>
      {/* <select>
        <option>hyi / 2</option>
        <option>A</option>
        <option>b</option>
        <option>c</option>
      </select> */}
      {/* <div className='bikeWrapper' > */}

      <div className='bike' >
        <div className='bikeName q'>
          <span>Bike name</span>
          <input></input>
        </div>
        <div className='bikeType q'>
          <span>Bike type</span>
          <select>
            <option>Mountain Bike</option>
            <option>Road Bike</option>
            <option>Touring Bike</option>
            <option>Folding Bike</option>
            <option>Fixed Gear/ Track Bike</option>
            <option>BMX </option>
            <option>Recumbent Bike </option>
            <option> Cruiser </option>
            <option>Hybrid Bike </option>
            <option>Cyclocross Bike </option>
            <option>Electric Bike </option>
          </select>
        </div>
        <div className='bikePrice q'>
          <span>Price($)</span>
          <input></input>
        </div>
        <div className='select q'>
          <button>Submit</button>
        </div>
      </div>
      <p>

      </p>
      <p>You have 0 rented bike . Yor rent (Total : $0)</p>
      <p>You have no rented bicycles</p>
      <p>Available bicycles (0)</p>
      <p> There are no available bicycles</p>
      <p> TEST</p>
      {/* </div> */}
    </div>
  );
}

export default App;
