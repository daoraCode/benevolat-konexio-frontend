import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Messagerie from './pages/Messagerie';
import News from './pages/News';
import Sessions from "./pages/Sessions";
import { ListSessionsContextProvider } from "./context/ListSessions";
import { ListNewsContextProvider } from "./context/ListNews";
import Profile from "./pages/Profile";
import Mail from './pages/Mail';

const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <ListNewsContextProvider>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/messagerie" element ={<Messagerie />} />
          <Route path="/mail" element ={<Mail />} />
          <Route path="/news" element ={<News />} />
          <Route exact path="/sessions" element={<Sessions />} />
          <Route path="/profile" element ={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        </ListNewsContextProvider>
      </ListSessionsContextProvider>
    </BrowserRouter>
  );
};

export default App;
