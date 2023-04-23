import { useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";

export const AddMuscle = () => {
  const [muscleInput, setMuscleInput] = useState("");

  const { handleAddMuscle, handleClearMuscle } = useMuscleContext();

  const handleDown = (event) => {
    if (event.key === "Enter") {
      handleAddMuscle(muscleInput);
      setMuscleInput("");
    }
  };

  function handleClick() {
    handleAddMuscle(muscleInput);
    setMuscleInput("");
  }

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
        onKeyDown={handleDown}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        Add Muscle
      </button>

      <button
        onClick={handleClearMuscle}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </section>
  );
};
