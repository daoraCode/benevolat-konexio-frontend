import { useState, createContext } from 'react'

const ListMessageContext = createContext({})

const ListMessageContextProvider = ({children}) => {
  const [ message, setMessage ] = useState(null)

  const getMessage = async () => {
    const response = await fetch(`http://localhost:5000/message`, {
      credentials: 'include'
    })

    const data = await response.json()

    setMessage(data)
  }

  const value = {
    message,
    getMessage
  }

  return (
    <ListNewsContext.Provider value={value}>
      {children}
    </ListNewsContext.Provider>
  )
}

export {
  ListMessageContext,
  ListMessageContextProvider
}