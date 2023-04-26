import { Exercise } from "../Exercise/Exercise";

export const ExerciseForm = ({ exercises, muscleId }) => {
  return (
    <section className="grid grid-cols-2 ">
      {exercises.map((mus) => (
        <Exercise key={mus.id} exercise={mus} muscleId={muscleId} />
      ))}
    </section>
  );
};
