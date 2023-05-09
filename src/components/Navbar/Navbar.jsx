import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthProvider } from "../../hook/useAuthProvider";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { user, Logout } = useAuthProvider();

  const handleLogout = async () => {
    await Logout();
  };

  return (
    <header className="flex   align-middle justify-end mt-4 m-auto    font-bold w-auto max-w-6xl ">
      <nav className="w-auto flex gap-5 mr-3   px-10 py-2 rounded  justify-around">
        <ul className="flex gap-5 items-center text-xl">
          <li className="flex items-center gap-3">
            {user?.displayName || user?.email}
          </li>
          <li>
            <button onClick={handleLogout} className="flex items-center gap-3 ">
              <FontAwesomeIcon icon={faRightFromBracket} className=" h-4.2  " />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
