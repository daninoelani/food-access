import React from 'react';
import { Router } from "@reach/router";
import Location from './components/Location';
import Home from './components/Home';
import './App.css';

export default () => {
  return (
    <>
    <div className="App">
      <Router>
        <Home path='/' />
        <Location path="/location" />
      </Router>
      </div>
    </>
  )
}