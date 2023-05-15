import { useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { MySets } from "../MySets/MySets";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ExerciseButtons } from "../ExerciseButtons/ExerciseButtons";
import { FormExercise } from "../FormExercise/FormExercise";
import { TextExercise } from "../TextExercise/TextExercise";

export const Exercise = ({ exercise, muscleId, updateExercise }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSetEditing, setIsSetEditing] = useState(false);

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

  const updateSet = async (newSet) => {
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
        if (ex.id === newSet.exerciseId) {
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

      await updateDoc(musclesRef, { exercises });
      setIsSetEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <section className={"flex flex-col gap-2 py-5 px-2 border-b-2"}>
          <div className="flex  justify-center mb-5 gap-10">
            <ExerciseButtons
              handleAddSet={handleAddSet}
              handleUpdateExercise={handleUpdateExercise}
              setIsEditing={setIsEditing}
              handleDeleteExercise={handleDeleteExercise}
            />
          </div>
          <FormExercise
            exercise={exercise}
            setInputExercise={setInputExercise}
            inputExercise={inputExercise}
            setSets={setSets}
            sets={sets}
            setReps={setReps}
            reps={reps}
          />

          <div className="grid grid-cols-2 gap-3  justify-start">
            <MySets
              muscleId={muscleId}
              exercise={exercise.mySets}
              exerciseId={exercise.id}
              isSetEditing={isSetEditing}
              setIsSetEditing={setIsSetEditing}
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

          <TextExercise exercise={exercise} />

          <div className="grid grid-cols-2  gap-4  ">
            <MySets
              key={exercise.id}
              muscleId={muscleId}
              exercise={exercise.mySets}
              exerciseId={exercise.id}
              isSetEditing={isSetEditing}
              setIsSetEditing={setIsSetEditing}
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
