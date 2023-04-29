import { useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ExerciseCard = () => {
  const { muscles, handleDeleteMuscle, handleAddExercise, handleToggleMuscle } =
    useMuscleContext();

  return (
    <section className=" flex flex-col gap-3 items-center max-w-6xl m-auto    md:grid grid-cols-2   ">
      {muscles?.map((muscle) => (
        <section
          className="   text-black border shadow-sm rounded  text-center  w-full  "
          key={muscle.id}
        >
          <div className="flex gap-3 items-center justify-around m-auto border-b-2 pb-5 py-5 bg-gray-100">
            <button
              className=" text-blue-500 hover:text-blue-700 text-3xl font-bold   rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleAddExercise(muscle.id)}
            >
              <FontAwesomeIcon icon={faDumbbell} />
            </button>

            <h2
              onClick={() => handleToggleMuscle(muscle.id)}
              className="text-4xl font-bold w-52"
            >
              {muscle.muscle}
            </h2>
            <button
              className="text-red-500 hover:text-red-700 text-3xl"
              onClick={() => handleDeleteMuscle(muscle.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <section>
            <ExerciseForm exercises={muscle.exercises} muscleId={muscle.id} />
          </section>
        </section>
      ))}
    </section>
  );
};
