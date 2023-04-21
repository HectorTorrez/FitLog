import { useEffect, useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { ExerciseCard } from "../ExerciseCard/ExerciseCard";

const initialExercises = [];

export const WorkoutForm = () => {
  const [muscles, setMuscles] = useState(() => [
    {
      id: new Date().getTime(),
      muscle: "Test 1",
      exercises: [
        {
          id: new Date().getTime() * 100,
          sets: "2 ",
          weight: "30 ",
          reps: "300",
        },
        {
          id: new Date().getTime() * 10,
          sets: "5 ",
          weight: "20 ",
          reps: "4 ",
        },
      ],
    },
    {
      id: new Date().getTime() * 200,
      muscle: "Test 2",
      exercises: [
        {
          id: new Date().getTime() + 10,
          reps: "3 ",
          sets: "2 ",
          weight: "30 ",
        },
        {
          id: new Date().getTime(),
          reps: "4 ",
          sets: "5 ",
          weight: "20",
        },
      ],
    },
  ]);

  const [muscleInput, setMuscleInput] = useState("");

  return (
    <section className="max-w-md  my-10 mx-2 flex flex-col gap-3 text-center">
      {/* {alert && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5">
          <p className="text-red-500">Muscle already exists</p>
        </div>
      )} */}

      <h1 className="text-2xl text-gray-700 font-bold mb-2" htmlFor="">
        WorkoutLog
      </h1>
      <input
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Add Muscle"
        type="text"
        name="muscle"
        value={muscleInput}
        onChange={(event) => setMuscleInput(event.target.value)}
        // onKeyDown={handleDown}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        // onClick={handleClick}
      >
        Add Muscle
      </button>

      <button
        // onClick={handleClearMuscle}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>

      <ExerciseCard muscles={muscles} />
    </section>
  );
};
