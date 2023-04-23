import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const Exercise = ({ exercise, onDeleteMuscle }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { handleDeleteExercise } = useMuscleContext();

  let todoContent;
  if (isEditing) {
    todoContent = (
      <section className="flex gap-2">
        <button
          className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
          onClick={() => setIsEditing(false)}
        >
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>

        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.exercise}
        ></input>
        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.sets}
        ></input>

        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.reps}
        ></input>

        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.weight}
        ></input>
        <button
          onClick={() => handleDeleteExercise(exercise.id)}
          className=" text-red-500 font-bold py-1 px-1 rounded"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>
    );
  } else {
    todoContent = (
      <section className="flex gap-3 items-center  justify-center justify-items-stretch">
        <button
          className="text-yellow-600 font-bold py-1 px-1 rounded   "
          onClick={() => setIsEditing(true)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>

        <p>Exercise: {exercise.exercise}</p>
        <p>Sets: {exercise.sets}</p>
        <p>Reps: {exercise.reps}</p>
        <p>Weight: {exercise.weight}</p>
        <button
          onClick={() => handleDeleteExercise(exercise.id)}
          className=" text-red-500 font-bold py-1 px-1 rounded"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>
    );
  }

  return (
    <div>
      <label
        htmlFor=""
        className="flex flex-col  gap-2 justify-center m-5 items-center"
      >
        {todoContent}
      </label>
    </div>
  );
};
