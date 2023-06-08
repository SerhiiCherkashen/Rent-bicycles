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
import { storeTitle } from './redux/storeTest';

function App(props) {
  return (
    <div className="App">
      < SetTitle store={storeTitle} />
      {/* <Bicycle /> */}
      <Likes store={store} />
      {/* store={store} */}
    </div >
  );
}


export default (App);





