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
      <section className="flex flex-col gap-2  ">
        <button
          className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
          onClick={() => setIsEditing(false)}
        >
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>

        <label htmlFor={exercise.id}>
          <p className="text-base font-bold">Exercise</p>
          <input
            className="w-24 shadow appearance-none border rounded p-1
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            maxLength={15}
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
        </label>

        <label htmlFor={exercise.id}>
          <p className="text-base font-bold">Sets</p>
          <input
            className="w-10 shadow appearance-none border rounded p-1
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
        </label>

        <label htmlFor={exercise.id}>
          <p className="text-base font-bold">Reps</p>
          <input
            className="w-24 shadow appearance-none border rounded p-1
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
        </label>
        <label htmlFor={exercise.id}>
          <p className="text-base font-bold">Weight</p>
          <input
            className="w-16 shadow appearance-none border rounded p-1
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
        </label>
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
      <section className="flex flex-col gap-3 items-center  justify-center ">
        <button
          className="text-yellow-600 font-bold py-1 px-1 rounded   "
          onClick={() => setIsEditing(true)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <div className=" flex flex-col grid-cols-2    gap-4">
          <p className="text-base font-bold ">
            Exercise{" "}
            <span className="block font-normal">{exercise.exercise}</span>
          </p>
          <p className="text-base font-bold">
            Sets <span className="block font-normal">{exercise.sets}</span>
          </p>
          <p className="text-base font-bold ">
            Reps <span className="block font-normal">{exercise.reps}</span>
          </p>
          <p className="text-base font-bold ">
            Weight <span className="block font-normal">{exercise.weight}</span>
          </p>
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
