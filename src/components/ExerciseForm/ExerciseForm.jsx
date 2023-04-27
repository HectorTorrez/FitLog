import { Exercise } from "../Exercise/Exercise";

export const ExerciseForm = ({ exercises, muscleId }) => {
  return (
    <section className=" ">
      {exercises.map((mus) => (
        <Exercise
          key={mus.id}
          exercise={mus}
          muscleId={muscleId}
          mySets={mus.mySets}
        />
      ))}
    </section>
  );
};
