import { useState, createContext } from 'react'

const ListSessionsContext = createContext({})

const ListSessionsContextProvider = ({children}) => {
  const [ sessions, setSessions ] = useState(null)

  const getSessions = async () => {
    const response = await fetch(`http://localhost:5000/courses`, {
      credentials: 'include'
    })

    const data = response.json()

    setSessions(data)
  }

  const values = {
    sessions,
    getSessions
  }

  return (
    <ListSessionsContext.Provider value={values}>
      {children}
    </ListSessionsContext.Provider>
  )
}

export {
  ListSessionsContext,
  ListSessionsContextProvider
}