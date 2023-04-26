import { useAuthProvider } from "../../hook/useAuthProvider";

export const Navbar = () => {
  const { user, Logout } = useAuthProvider();

  const handleLogout = async () => {
    await Logout();
  };

  return (
    <header className="flex justify-end m-auto mt-3 max-w-6xl">
      <nav className="w-52 flex  justify-around">
        <ul>
          <li>{user?.displayName || user?.email}</li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};
