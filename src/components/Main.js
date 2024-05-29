import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cats from './Cats';
import Dogs from './Dogs';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<div>Welcome to the home page!</div>} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </main>
  );
}

export default Main;
