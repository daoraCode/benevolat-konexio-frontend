import { useState, createContext } from "react";

const ListSessionsContext = createContext({});

const ListSessionsContextProvider = ({ children }) => {
  const [sessions, setSessions] = useState(null);
  const [session, setSession] = useState(null);

  const getSessions = async () => {
    const response = await fetch(`http://localhost:5000/courses`, {
      credentials: "include",
    });

    const data = await response.json();

    setSessions(data);
  };

  const getSession = async (id) => {
    const response = await fetch(`http://localhost:5000/courses/${id}`, {
      credentials: "include",
    });

    const data = await response.json();

    setSession(data);
  };

  const bookDay = async (date, id_user, id_session) => {
    const response = await fetch(
      `http://localhost:5000/courses/${id_session}/${id_user}`,
      {
        credentials: "include",
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
        }),
      }
    );

    const data = await response.json();

    setSession(data);
  };

  const value = {
    sessions,
    getSessions,
    session,
    getSession,
    bookDay,
  };

  return (
    <ListSessionsContext.Provider value={value}>
      {children}
    </ListSessionsContext.Provider>
  );
};

export { ListSessionsContext, ListSessionsContextProvider };
