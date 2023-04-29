import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthProvider } from "../../hook/useAuthProvider";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { user, Logout } = useAuthProvider();

  const handleLogout = async () => {
    await Logout();
  };

  return (
    <header className="flex justify-end m-auto pt-3 max-w-6xl ">
      <nav className="w-52 flex  justify-around">
        <ul>
          <li className="flex items-end gap-3">
            {user?.displayName || user?.email}
          </li>
        </ul>
        <button onClick={handleLogout} className="flex items-center gap-3">
          Logout <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </nav>
    </header>
  );
};
