import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import EmailList from './pages/Messagerie';
import News from './pages/News';
import Sessions from "./pages/Sessions";
import { ListSessionsContextProvider } from "./context/ListSessions";

const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/messagerie" element ={<EmailList />} />
          <Route path="/news" element ={<News />} />
          <Route exact path="/sessions" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ListSessionsContextProvider>
    </BrowserRouter>
  );
};

export default App;
