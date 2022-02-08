import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Sessions from "./pages/Sessions";
import { ListSessionsContextProvider } from "./contexts/ListSessions";
import Login from './pages/Login'
import Signup from './pages/Signup'
import { VolunteerContextProvider } from './contexts/Volunteer';


const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <VolunteerContextProvider>  
          <Routes>
            <Route exact path="/sessions" element={<Sessions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </VolunteerContextProvider>
      </ListSessionsContextProvider>
    </BrowserRouter>
  );
};

export default App;
