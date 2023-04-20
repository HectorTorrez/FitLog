import { useEffect, useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";

const initialExercises = [
  {
    id: new Date().getTime(),
    muscle: "",
    exercises: [
      {
        id: new Date().getTime() * 5,
        sets: "",
        reps: "",
        weight: "",
      },
    ],
  },
];

export const WorkoutForm = () => {
  const [muscles, setMuscles] = useState(initialExercises);
  const [muscleInput, setMuscleInput] = useState("");
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [alert, setAlert] = useState(false);

  console.log(muscles);

  const handleDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleAddMuscle = (muscle) => {
    setMuscles([
      ...muscles,
      {
        id: new Date().getTime(),
        muscle: muscle,
        exercises: [
          {
            id: new Date().getTime() * 5,
            sets: "add here",
            reps: "add here",
            weight: "add here",
          },
        ],
      },
    ]);

    setShowExerciseForm(true);
  };

  const handleClick = () => {
    setMuscleInput("");
    handleAddMuscle(muscleInput);
  };

  const handleChangeMuscle = (nextMuscle) => {
    setMuscles(
      muscles.map((muscle) => {
        if (muscle.id === nextMuscle.id) {
          return nextMuscle;
        } else {
          return muscle;
        }
      })
    );
  };

  return (
    <section className="max-w-md mx-auto">
      {alert && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5">
          <p className="text-red-500">Muscle already exists</p>
        </div>
      )}

      <label className="block text-gray-700 font-bold mb-2" htmlFor="">
        Muscle
      </label>
      <input
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Add Muscle"
        type="text"
        name="muscle"
        value={muscleInput}
        onChange={(event) => setMuscleInput(event.target.value)}
        onKeyDown={handleDown}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        Add Muscle
      </button>

      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Clear
      </button>

      {showExerciseForm &&
        muscles.map((muscle) => (
          <section key={muscle.id}>
            <h2>{muscle.muscle}</h2>

            <ExerciseForm
              muscles={muscles}
              onChange={handleChangeMuscle}
              onAddMuscle={handleAddMuscle}
            />
          </section>
        ))}
      {/* {showExerciseForm && <ExerciseForm muscle={muscle} />} */}
    </section>
  );
};
