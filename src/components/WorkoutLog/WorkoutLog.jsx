import { MuscleProvider } from "../../MuscleContext/MuscleContext";
import { Navbar } from "../Navbar/Navbar";
import { WorkoutForm } from "../WorkoutForm/WorkoutForm";

export const WorkoutLog = () => {
  return (
    <MuscleProvider>
      <div className="h-auto">
        <Navbar />
        <WorkoutForm />
      </div>
    </MuscleProvider>
  );
};
