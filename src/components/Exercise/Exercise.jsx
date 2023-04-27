import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const Exercise = ({ exercise, muscleId, mySets }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { handleDeleteExercise, handleChangeExercise } = useMuscleContext();

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <section className="flex flex-col  gap-2 border-4 border-blue-400 py-5 px-2">
          <div className="flex gap-2 items-end">
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

            <button
              onClick={() => handleDeleteExercise(muscleId, exercise.id)}
              className=" text-red-500 font-bold py-1 px-1 rounded"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className="flex gap-3 justify-center">
            {/* {mySets?.map((set) => (
              <section key={set.id} className="flex gap-1">
                <label htmlFor="set">
                  <p className="text-base font-bold">Set</p>

                  <input
                    className="w-5 shadow appearance-none border rounded p-1
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={set.set}
                    name={set.id}
                    onChange={(e) => {
                      handleChangeSets(set.id, {
                        ...exercise,
                        set: e.target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="set">
                  <p className="text-base font-bold">Weight</p>

                  <input
                    className="w-14 shadow appearance-none border rounded p-1
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={set.weight}
                    name={exercise.id}
                    onChange={(e) => {
                      handleChangeSets(set.id, {
                        ...exercise,
                        weight: e.target.value,
                      });
                    }}
                  />
                </label>
              </section>
            ))} */}
          </div>
        </section>
      </>
    );
  } else {
    todoContent = (
      <>
        <section className="flex flex-col  gap-3 items-center  justify-center  border-blue-400 rounded p-5 border-4">
          <div className=" flex  gap-4">
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
            {/* <p className="text-base font-bold ">
              Weight{" "}
              <span className="block font-normal">{exercise.weight}</span>
            </p> */}

            <button
              onClick={() => handleDeleteExercise(muscleId, exercise.id)}
              className=" text-red-500 font-bold py-1 px-1 rounded"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className="flex gap-4 ">
            {/* {mySets?.map((sets) => (
              <section key={sets.id}>
                <div className=" flex gap-3 p-3">
                  <p className="text-base font-bold ">
                    Set <span className="block font-normal">{sets.set}</span>
                  </p>
                  <p className="text-base font-bold ">
                    Lb <span className="block font-normal">{sets.weight}</span>
                  </p>
                </div>
              </section>
            ))} */}
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
