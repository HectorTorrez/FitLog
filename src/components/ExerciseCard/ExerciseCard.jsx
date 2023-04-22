import { useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { useMuscleContext } from "../../hooks/useMuscleContext";

export const ExerciseCard = () => {
  const [edit, setEdit] = useState(false);
  const { muscles, handleDeleteExercise, handleToggleMuscle } =
    useMuscleContext();

  return (
    <section className=" flex flex-col gap-3 ">
      {muscles.map((muscle) => (
        <section className="bg-slate-200 py-5 text-center" key={muscle.id}>
          <button onClick={() => handleDeleteExercise(muscle.id)}>
            DELETE
          </button>

          <h2 className="text-2xl">{muscle.muscle}</h2>
          <ExerciseForm exercises={muscle.exercises} />
        </section>
      ))}
    </section>
  );
};
