import { useContext } from "react"
import { authContext } from "../context/AuthContext"

export const useAuthProvider = () => {
  if (!authContext) throw new Error("There is not auth Provider")

  return useContext(authContext)
}