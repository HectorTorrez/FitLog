import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const Exercise = ({ exercise, muscleId }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { handleDeleteExercise, handleChangeExercise } = useMuscleContext();

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
          className="w-32 shadow appearance-none border rounded py-2 px-1
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.exercise}
          onChange={(e) =>
            handleChangeExercise(muscleId, {
              ...exercise,
              exercise: e.target.value,
            })
          }
        ></input>
        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.sets}
          onChange={(e) =>
            handleChangeExercise(muscleId, {
              ...exercise,
              sets: e.target.value,
            })
          }
        ></input>

        <input
          className="w-24 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.reps}
          onChange={(e) =>
            handleChangeExercise(muscleId, {
              ...exercise,
              reps: e.target.value,
            })
          }
        ></input>

        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.weight}
          onChange={(e) =>
            handleChangeExercise(muscleId, {
              ...exercise,
              weight: e.target.value,
            })
          }
        ></input>
        <button
          onClick={() => handleDeleteExercise(muscleId, exercise.id)}
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
        <div className="grid grid-cols-4 grid- gap-4">
          <p className="text-lg font-bold ">
            Exercise:{" "}
            <span className="block font-normal">{exercise.exercise}</span>
          </p>
          <p className="text-lg font-bold">
            Sets: <span className="block font-normal">{exercise.sets}</span>
          </p>
          <p className="text-lg font-bold ">
            Reps: <span className="block font-normal">{exercise.reps}</span>
          </p>
          <p className="text-lg font-bold ">
            Weight: <span className="block font-normal">{exercise.weight}</span>
          </p>
          {/* <p>Sets: {exercise.sets}</p>
        <p>Reps: {exercise.reps}</p>
        <p>Weight: {exercise.weight}</p> */}
        </div>
        <button
          onClick={() => handleDeleteExercise(muscleId, exercise.id)}
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
