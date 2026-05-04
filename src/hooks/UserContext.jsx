import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async infoUser => {
    setUserData(infoUser)
    await localStorage.setItem('portifolio:userData', JSON.stringify(infoUser))
  }

  const logout = async () => {
    await localStorage.removeItem('portifolio:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('portifolio:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }

    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser most be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
