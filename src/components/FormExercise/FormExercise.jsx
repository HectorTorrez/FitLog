import { useState } from "react";

export const FormExercise = ({
  exercise,
  setInputExercise,
  inputExercise,
  setSets,
  sets,
  setReps,
  reps,
}) => {
  return (
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
  );
};
