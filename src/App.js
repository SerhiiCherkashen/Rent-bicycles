import logo from './logo.svg';
import './App.css';
// import React from 'react';
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Bicycle from './components/bicycles';
import SetTitle from './components/setTitle';
import Likes from './components/likes';
import store from './redux/storeLikes';
import { storeTitle } from './redux/storeTitle';
import Input from './components/input';
import Bike from './components/bike';
import Schetchic from './components/schetchik';

function App(props) {
  return (
    <div className="App">
      < SetTitle />
      {/* <Bicycle /> */}
      <Bike />
      {/* <Input /> */}
      {/* <Likes /> */}
      <Schetchic />
    </div >
  );
}


export default (App);





