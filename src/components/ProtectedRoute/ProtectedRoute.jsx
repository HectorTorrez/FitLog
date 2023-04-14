import { Navigate } from "react-router-dom"
import { useAuthProvider } from "../../hook/useAuthProvider"

export const ProtectedRoute = ({ children }) => {

  const { user, loading } = useAuthProvider()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" />

  return <>{children}</>
}