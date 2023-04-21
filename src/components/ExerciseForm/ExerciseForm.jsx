import { useEffect, useState } from "react";
import { Exercise } from "../Exercise/Exercise";

export const ExerciseForm = ({ muscle }) => {
  console.log(muscle.exercises);

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (id) => {
    const isId = muscle.exercises.find((mus) => mus.id === id);
    console.log(isId);
    if (isId.id) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  };
  const handleAdd = () => {
    setIsEdit(false);
  };

  return (
    <>
      <Exercise
        muscle={muscle}
        isEdit={isEdit}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
    </>
  );
};
{
  /* <section className="bg-slate-100  shadow-md rounded px-1 pt-1 pb-1 mb-4">
        <>
          <div>
            <button>Add Exercise</button>
          </div>

          <div className="bg-white   rounded  mb-1" key={muscles.id}>
            <div className="">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="exercise"
              >
                Exercice
              </label>
              {isEdit ? (
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="exercise"
                  value={exercise}
                  onChange={(event) => setExercise(event.target.value)}
                />
              ) : (
                <span>{exercise}</span>
              )}

              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="sets"
              >
                Sets
              </label>
              {isEdit ? (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="sets"
                  value={sets}
                  onChange={(event) => setSets(event.target.value)}
                />
              ) : (
                <span>{sets}</span>
              )}

              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="reps"
              >
                Reps
              </label>
              {isEdit ? (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="reps"
                  value={reps}
                  onChange={(event) => setReps(event.target.value)}
                />
              ) : (
                <span>{reps}</span>
              )}

              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="weight"
              >
                Weight
              </label>
              {isEdit ? (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="weight"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              ) : (
                <span>{weight}</span>
              )}
            </div>
            <div className="flex flex-col">
              <button>Save</button>

              <button>Edit</button>
            </div>
          </div>
        </>
      </section> */
}
