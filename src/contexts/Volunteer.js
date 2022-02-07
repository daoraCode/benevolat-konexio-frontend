import { createContext, useState } from 'react'

const VolunteerContext = createContext({})

const VolunteerContextProvider = ({ children }) => {
  
  const [ user, setUser ] = useState({})
  const [ connected, setConnected ] = useState(false)
  const [ users, setUsers ] = useState([])


  const getVolunteers = async () => {
    const response = await fetch('http://localhost:5000/users/volunteers', {
      credentials: 'include'
    })

    const data = await response.json()

    setUser(data)
  }

  const value = {
    user,
    setUser,
    connected,
    setConnected,
    users,
    setUsers,
    getVolunteers
  }

  return (
    <VolunteerContext.Provider value={value}>
      {children}
    </VolunteerContext.Provider>
  )
}

export {
  VolunteerContext,
  VolunteerContextProvider
}