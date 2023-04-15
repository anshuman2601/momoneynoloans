import React from 'react';
import Home from './Home';
import Article from './Article';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;