import { useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const ExerciseCard = () => {
  const [edit, setEdit] = useState(false);
  const {
    muscles,
    handleDeleteMuscle,
    handleToggleMuscle,
    handleAddExercise,
    handleEditMuscle,
  } = useMuscleContext();

  return (
    <section className=" flex flex-col gap-3 items-center ">
      {muscles.map((muscle) => (
        <section
          className="bg-slate-200 py-5 text-center min-w-full"
          key={muscle.id}
        >
          <div className="flex gap-3 items-center justify-around m-auto">
            <button
              className=" text-blue-500 hover:text-blue-700 text-3xl font-bold   rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleAddExercise(muscle.id)}
            >
              <FontAwesomeIcon icon={faDumbbell} />
            </button>

            <h2 className="text-3xl w-52">{muscle.muscle}</h2>
            <button
              className="text-red-500 hover:text-red-700 text-3xl"
              onClick={() => handleDeleteMuscle(muscle.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>

          <ExerciseForm exercises={muscle.exercises} />
        </section>
      ))}
    </section>
  );
};
