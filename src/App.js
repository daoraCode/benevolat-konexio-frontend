import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import { ListSessionsContextProvider } from "./contexts/ListSessions";
import Messagerie from "./pages/Messagerie";
import News from "./pages/News";
import Sessions from "./pages/Sessions";
import { ListNewsContextProvider } from "./contexts/ListNews";
import Profile from "./pages/Profile";
import Mail from "./pages/Mail";
import Faq from "./pages/Faq";
import Login from './pages/Login'
import Signup from './pages/Signup'
import { VolunteerContextProvider } from './contexts/Volunteer';
import Calendar from "./pages/Calendar";
import ReceivedMessage from "./pages/ReceivedMessage";
import SentMessage from "./pages/SentMessage";
import {
  ListMessageContextProvider,
} from "./contexts/ListMessage";

const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <ListNewsContextProvider>
          <VolunteerContextProvider>
            <ListMessageContextProvider>
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/messagerie" element={<Messagerie />} />
                <Route path="/messagerie/:id_message" element={<Mail />} />
                <Route path="/news" element={<News />} />
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/recu" element={<ReceivedMessage />} />
                <Route path="/envoyes" element={<SentMessage />} />
                <Route path="/sessions/:id_session" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </ListMessageContextProvider>
          </VolunteerContextProvider>
        </ListNewsContextProvider>
      </ListSessionsContextProvider>
    </BrowserRouter>
  )
}

export default App