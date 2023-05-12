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
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const Exercise = ({ exercise, muscleId, updateExercise }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputExercise, setInputExercise] = useState(exercise.exercise);
  const [sets, setSets] = useState(exercise.sets);
  const [reps, setReps] = useState(exercise.reps);

  const { handleDeleteExercise, handleAddSet } = useMuscleContext();

  const handleUpdateExercise = () => {
    updateExercise({
      id: exercise.id,
      exercise: inputExercise,
      sets: sets,
      reps: reps,
      mySets: [...exercise.mySets],
    });
    setIsEditing(false);
  };

  const updateSet = async (newSet, exerciseId) => {
    // const updateSet = exercise.mySets.map((set) => {
    //   if (set.id === newSet.setId) {
    //     return newObjet;
    //   }
    //   return set;
    // });

    //TODO: fix update set

    try {
      const newObjet = {
        id: newSet.setId,
        set: newSet.inputSet,
        weight: newSet.inputWeight,
      };
      const musclesRef = doc(db, "muscles1", muscleId);
      const snapshot = await getDoc(musclesRef);
      const muscle = snapshot.data();
      const exercises = muscle.exercises.map((ex) => {
        if (ex.id === exerciseId) {
          const mySets = ex.mySets.map((set) => {
            if (set.id === newSet.setId) {
              return newObjet;
            } else {
              return set;
            }
          });
          return { ...ex, mySets };
        } else {
          return ex;
        }
      });
      console.log(exercises);
      await updateDoc(musclesRef, { exercises });
    } catch (error) {
      console.log(error);
    }
  };

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <section className="flex flex-col   gap-2  py-5 px-2  border-b-2">
          <div className="flex  justify-center mb-5 gap-10">
            <button
              onClick={() => handleAddSet(muscleId, exercise.id)}
              className=" text-blue-500  py-1 px-1 font-bold   rounded focus:outline-none focus:shadow-outline"
            >
              <FontAwesomeIcon icon={faDumbbell} />
            </button>
            <button
              className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
              onClick={handleUpdateExercise}
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
            <button
              className="text-yellow-600 font-bold py-1 px-1 rounded   "
              onClick={() => setIsEditing(false)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              onClick={() => handleDeleteExercise(muscleId, exercise.id)}
              className=" text-red-500 font-bold  rounded "
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className="grid grid-cols-3 justify-start pb-5 items-center ">
            <label htmlFor={exercise.exercise}>
              <p className="text-base font-bold">Exercise</p>
              <input
                className="w-24 shadow appearance-none border rounded p-1
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                maxLength={15}
                type="text"
                placeholder={exercise.exercise}
                name={exercise.exercise}
                value={inputExercise}
                onChange={(e) => setInputExercise(e.target.value)}
              ></input>
            </label>

            <label htmlFor={exercise.set}>
              <p className="text-base font-bold">Sets</p>
              <input
                className="w-10 shadow appearance-none border rounded p-1
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name={exercise.set}
                value={sets}
                onChange={(e) => setSets(e.target.value)}
              ></input>
            </label>

            <label htmlFor={exercise.reps}>
              <p className="text-base font-bold">Reps</p>
              <input
                className="w-24 shadow appearance-none border rounded p-1
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name={exercise.reps}
                value={reps}
                onChange={(e) => setReps(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3  justify-start">
            <MySets
              muscleId={muscleId}
              exercise={exercise.mySets}
              exerciseId={exercise.id}
              isEditing={isEditing}
              updateSet={updateSet}
            />
          </div>
        </section>
      </>
    );
  } else {
    todoContent = (
      <>
        <section className="flex flex-col   gap-6 items-center  justify-center   rounded py-5 px-2 border-b-2 ">
          <div className="flex gap-4 place-content-between">
            <button
              type="button"
              onClick={() => handleAddSet(muscleId, exercise.id)}
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
            <button
              onClick={() => handleDeleteExercise(muscleId, exercise.id)}
              className=" text-red-500 font-bold py-1 px-1 rounded"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>

          <div className=" flex items-center  justify-between gap-6">
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
          </div>
          <div className="grid grid-cols-2  gap-4  ">
            <MySets
              key={exercise.id}
              muscleId={muscleId}
              exercise={exercise.mySets}
              exerciseId={exercise.id}
              updateSet={updateSet}
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <div>
      <label className="flex   gap-2 justify-center  items-center  " htmlFor="">
        {todoContent}
      </label>
    </div>
  );
};
