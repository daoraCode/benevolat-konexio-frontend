import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListSessionsContextProvider } from "./context/ListSessions";

import Error404 from "./pages/Error404"
import Sessions from "./pages/Sessions";
import Calendar from "./pages/Calendar";

const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <Routes>
          <Route exact path="/sessions" element={<Sessions />} />
          <Route path="/sessions/:id_session" element={<Calendar />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ListSessionsContextProvider>
    </BrowserRouter>
  );
};

export default App;
