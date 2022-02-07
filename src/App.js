import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import { ListSessionsContextProvider } from "./context/ListSessions";
import Messagerie from './pages/Messagerie';
import News from './pages/News';

const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/messagerie" element ={<Messagerie />} />
          <Route path="/news" element ={<News />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ListSessionsContextProvider>
    </BrowserRouter>
  );
};

export default App;
