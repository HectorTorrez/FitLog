import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";

export const Exercise = ({ exercise, onDeleteMuscle }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { handleDeleteExercise } = useMuscleContext();

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.sets}
        ></input>

        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="exercise"
          value={exercise.reps}
        ></input>

        <input
          className="w-16 shadow appearance-none border rounded py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={exercise.id}
          value={exercise.weight}
        ></input>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <section className="flex gap-3 items-center">
        <p>Sets: {exercise.sets}</p>
        <p>Reps: {exercise.reps}</p>
        <p>Weight: {exercise.weight}</p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </section>
    );
  }

  return (
    <div>
      <label htmlFor="" className="flex gap-2 justify-center m-5 items-center">
        {todoContent}
        <button
          onClick={() => handleDeleteExercise(exercise.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </label>
    </div>
  );
};
