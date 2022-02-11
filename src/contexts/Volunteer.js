import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VolunteerContext = createContext({})

const VolunteerContextProvider = ({ children }) => {

  const navigate = useNavigate()

  const [ volunteer, setVolunteer ] = useState({})
  const [ user, setUser ] = useState(null)


  const signup = async values => {
    const signupResponse = await fetch('http://localhost:5000/auth/signup', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        businessName: values.businessName,
        telephone: values.telephone,
        password: values.password,
      })
    })

    const volunteer = await signupResponse.json()

    if (volunteer.error) {
      alert(volunteer.error)
      return
    }

    const loginResponse = await fetch('http://localhost:5000/auth/login/volunteer', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: volunteer.email,
        password: volunteer.password
      })
    })

    const loginData = await loginResponse.json()

    if (loginResponse.status >= 400) {
      alert(loginResponse.statusText)
    } else {
      console.log(loginResponse)
      navigate("/sessions")
    }
    
    setUser(loginData)
  }

  const logout = async () => {
    const response = await fetch(`http://localhost:5000/auth/logout`, {
      credentials: 'include',
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(response.error) {
      alert(response.error)
      return
    }
    if(response.status >= 400) {
      alert(response.statusText)
      return
    }

    setUser(null)
    navigate('/login')
  }

  const value = {
    volunteer,  
    setVolunteer,
    user,
    setUser,
    signup,
    logout
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