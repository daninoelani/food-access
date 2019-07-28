import React from 'react';
import { Router } from "@reach/router";
import Location from './components/Location';
import Home from './components/Home';
import FoodSource from './components/FoodSource'
import './App.css';

export default () => {
  return (
    <>
    <div className="App">
      <Router>
        <Home path='/' />
        <FoodSource path='/foodsource' />
        <Location path="/location" />
      </Router>
      </div>
    </>
  )
}