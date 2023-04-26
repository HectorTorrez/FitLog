import { Exercise } from "../Exercise/Exercise";

export const ExerciseForm = ({ exercises, muscleId }) => {
  return (
    <>
      {exercises.map((mus) => (
        <Exercise key={mus.id} exercise={mus} muscleId={muscleId} />
      ))}
    </>
  );
};
