import { useNavigate } from "react-router-dom"
import { useAuthProvider } from "../../hook/useAuthProvider"

export const Home = () => {

  const { user, Logout, } = useAuthProvider()



  const handleLogout = async () => {
    await Logout()
  }


  return (

    <>

      <div>Wecolme, {user?.displayName || user?.email}</div>

      <button onClick={handleLogout}>
        Logout
      </button>


    </>
  )
}