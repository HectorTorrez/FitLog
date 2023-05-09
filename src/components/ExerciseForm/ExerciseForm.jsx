import { Exercise } from "../Exercise/Exercise";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const ExerciseForm = ({ exercises, muscleId }) => {
  const updateExercise = async (newExercise) => {
    const updateExercise = exercises.map((m) => {
      if (m.id === newExercise.id) {
        return newExercise;
      }
      return m;
    });

    try {
      const musclesRef = doc(db, "muscles1", muscleId);

      await updateDoc(musclesRef, {
        exercises: updateExercise,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {exercises?.map((mus) => (
        <Exercise
          key={mus.id}
          exercise={mus}
          muscleId={muscleId}
          exercises={exercises}
          updateExercise={updateExercise}
        />
      ))}
    </>
  );
};
