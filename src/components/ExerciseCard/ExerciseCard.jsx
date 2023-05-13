import { useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { MuscleTitle } from "../MuscleTitle/MuscleTitle";

export const ExerciseCard = () => {
  const [isMuscleEditing, setIsMuscleEditing] = useState(false);

  const { muscles, handleDeleteMuscle, handleAddExercise, showOrHide } =
    useMuscleContext();

  return (
    <section className=" flex flex-col gap-3 items-center max-w-6xl m-auto    md:grid grid-cols-2   ">
      {muscles?.map((muscle) => (
        <section
          className="   text-black border shadow-sm rounded  text-center  w-full  "
          key={muscle.createAt}
        >
          <div className="flex gap-3 items-center justify-around m-auto border-b-2 pb-5 py-5 bg-gray-100">
            <button
              className=" text-blue-500 hover:text-blue-700 text-3xl font-bold   rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleAddExercise(muscle.newID)}
            >
              <FontAwesomeIcon icon={faDumbbell} />
            </button>
            <button onClick={() => showOrHide(muscle.newID)}>
              <FontAwesomeIcon icon={faEye} />
            </button>

            <MuscleTitle
              key={muscle.id}
              muscle={muscle}
              isMuscleEditing={isMuscleEditing}
              setIsMuscleEditing={setIsMuscleEditing}
            />

            {/* <h2
              onClick={() => handleToggleMuscle(muscle.id)}
              className="text-4xl font-bold w-52"
            >
              {muscle.muscle}
            </h2> */}
            <button
              className="text-red-500 hover:text-red-700 text-3xl"
              onClick={() => handleDeleteMuscle(muscle.newID)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <section>
            <ExerciseForm
              exercises={muscle.exercises}
              muscleId={muscle.newID}
            />
          </section>
        </section>
      ))}
    </section>
  );
};
