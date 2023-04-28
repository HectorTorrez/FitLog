import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { MySets } from "../MySets/MySets";

export const Exercise = ({ exercise, muscleId, exercises }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { handleDeleteExercise, handleChangeExercise, handleAddSet } =
    useMuscleContext();

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <section className="flex flex-col  gap-2 border-4 border-blue-400 py-5 px-2">
          <div className="flex justify-center">
            <button
              onClick={() => handleAddSet(muscleId)}
              className=" text-blue-500  py-1 px-1 font-bold   rounded focus:outline-none focus:shadow-outline"
            >
              <FontAwesomeIcon icon={faDumbbell} />
            </button>
            <button
              className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
              onClick={() => setIsEditing(false)}
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 items-center">
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

            <button
              onClick={() => handleDeleteExercise(muscleId, exercise.id)}
              className=" text-red-500 font-bold py-1 px-1 rounded grid-"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center">
            <MySets
              key={exercise.id}
              muscleId={muscleId}
              exercise={exercise}
              exerciseId={exercise.id}
              isEditing={isEditing}
            />
          </div>
        </section>
      </>
    );
  } else {
    todoContent = (
      <>
        <section className="flex flex-col  gap-3 items-center  justify-center  border-blue-400 rounded p-5 border-4">
          <div className=" flex   justify-between gap-6">
            <button
              onClick={() => handleAddSet(muscleId)}
              className=" text-blue-500  py-1 px-1 font-bold   rounded focus:outline-none focus:shadow-outline"
            >
              <FontAwesomeIcon icon={faDumbbell} />
            </button>
            <button
              className="text-yellow-600 font-bold py-1 px-1 rounded   "
              onClick={() => setIsEditing(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>

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

            <button
              onClick={() => handleDeleteExercise(muscleId, exercise.id)}
              className=" text-red-500 font-bold py-1 px-1 rounded"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className="flex gap-4  ">
            <MySets
              key={exercise.id}
              muscleId={muscleId}
              exercise={exercise}
              exerciseId={exercise.id}
              isEditing={isEditing}
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <div>
      <label
        htmlFor=""
        className="flex   gap-2 justify-center m-5 items-center"
      >
        {todoContent}
      </label>
    </div>
  );
};
