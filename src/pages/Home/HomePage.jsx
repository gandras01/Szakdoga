import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Exercises from '../Exercises/Exercise';

const HomePageComponent = () => {
  return (
    <div style={{ color: "green" }}>
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/exercises' element={<Exercises />} />
      </Routes>
    </div>
  )
}

export default HomePageComponent;
