import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;