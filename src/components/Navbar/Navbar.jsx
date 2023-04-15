import { useAuthProvider } from "../../hook/useAuthProvider"

export const Navbar = () => {

  const { user, Logout } = useAuthProvider()

  const handleLogout = async () => {
    await Logout()
  }

  return (
    <header className="flex justify-end mt-3">
      <nav className="w-52 flex  justify-around">
        <ul>
          <li>{user?.displayName || user?.email}</li>
        </ul>
        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  )
}