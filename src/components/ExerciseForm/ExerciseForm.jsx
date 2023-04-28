import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Exercise } from "../Exercise/Exercise";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export const ExerciseForm = ({ exercises, muscleId }) => {
  return (
    <section className=" ">
      {exercises?.map((mus) => (
        <Exercise
          key={mus.id}
          exercise={mus}
          muscleId={muscleId}
          exercises={exercises}
        />
      ))}
    </section>
  );
};
