import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import Exercises from '../pages/Exercises/Exercise';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/exercises" element={<Exercises />} />
    </Routes>
  );
};

export default AppRoutes;