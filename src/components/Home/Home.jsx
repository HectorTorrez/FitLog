import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../hook/useAuthProvider";
import { Navbar } from "../Navbar/Navbar";
import { WorkoutLog } from "../WorkoutLog/WorkoutLog";

export const Home = () => {
  return (
    <>
      <WorkoutLog />
    </>
  );
};
