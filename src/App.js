import React from 'react';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// context
import { VolunteerContextProvider } from './contexts/Volunteer';

//pages
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error404 from './pages/Error404'


const App = () => {
  return (
    <BrowserRouter>
      <VolunteerContextProvider>  
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </VolunteerContextProvider>
    </BrowserRouter>
  );
};

export default App;