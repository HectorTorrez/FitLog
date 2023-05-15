export const TextExercise = ({ exercise }) => {
  return (
    <div className=" flex items-center  justify-between gap-6">
      <p className="text-base font-bold ">
        Exercise <span className="block font-normal">{exercise.exercise}</span>
      </p>

      <p className="text-base font-bold">
        Sets <span className="block font-normal">{exercise.sets}</span>
      </p>
      <p className="text-base font-bold ">
        Reps <span className="block font-normal">{exercise.reps}</span>
      </p>
    </div>
  );
};
