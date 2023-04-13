import { createContext } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export const authContext = createContext();

export const AuthProvider = ({ children }) => {

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)



  return (
    <authContext.Provider value={{ signup }}>
      {children}
    </authContext.Provider>
  )
}