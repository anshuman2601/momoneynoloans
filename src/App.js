import React from 'react';
import Home from './Home';
import Quiz from './Quiz';

import Terms from './Terms';
import Videos from './Videos';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/terms" element={<Terms />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;