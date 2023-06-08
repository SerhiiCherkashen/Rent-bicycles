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

function App(props) {
  return (
    <div className="App">
      < SetTitle />
      {/* store={storeTitle} */}
      {/* <Bicycle /> */}
      <Input />
      <Likes />
      {/* store={store} */}
    </div >
  );
}


export default (App);





