import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sets = ({
  set,
  isEditing,
  muscleId,
  setInputSet,
  inputSet,
  inputWeight,
  setInputWeight,
  exerciseId,
}) => {
  const { handleChangeSets, handleDeleteSet } = useMuscleContext();

  let setContent;
  if (isEditing) {
    setContent = (
      <section key={set.id} className="grid grid-cols-3 items-end ">
        <label htmlFor="set">
          <p className="text-base font-bold">Set</p>

          <input
            className="w-8 shadow appearance-none border rounded p-1
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={inputSet}
            name={set.id}
            onChange={(e) => setInputSet(e.target.value)}
          />
        </label>
        <label htmlFor="weight">
          <p className="text-base font-bold">Weight</p>

          <input
            className="w-16 shadow appearance-none border rounded p-1
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={inputWeight}
            name={set.id}
            onChange={(e) => setInputWeight(e.target.value)}
          />
        </label>
        <button
          onClick={() => handleDeleteSet(muscleId, exerciseId, set.id)}
          className=" text-red-500 font-bold py-1 px-1 rounded"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>
    );
  } else {
    setContent = (
      <Fragment key={set.id}>
        <section className=" flex  gap-3 p-3  w-40 ">
          <p className="text-base font-bold w-40  ">
            Set <span className="block font-normal ">{set.set}</span>
          </p>
          <p className="text-base font-bold w-52">
            Lb <span className="block font-normal ">{set.weight}</span>
          </p>
          <button
            onClick={() => handleDeleteSet(muscleId, exerciseId, set.id)}
            className=" text-red-500 font-bold  rounded"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </section>
      </Fragment>
    );
  }

  return <>{setContent}</>;
};
