import { Fragment } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sets = ({ set, isEditing, muscleId }) => {
  const { handleChangeSets, handleDeleteSet } = useMuscleContext();
  let setContent;
  if (isEditing) {
    setContent = (
      <section
        key={set.id}
        className="grid grid-cols-3 items-end justify-center"
      >
        <label htmlFor="set">
          <p className="text-base font-bold">Set</p>

          <input
            className="w-8 shadow appearance-none border rounded p-1
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={set.set}
            name={set.id}
            onChange={(e) => {
              handleChangeSets(set, {
                ...set,
                set: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="weight">
          <p className="text-base font-bold">Weight</p>

          <input
            className="w-14 shadow appearance-none border rounded p-1
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={set.weight}
            name={set.id}
            onChange={(e) => {
              handleChangeSets(set, {
                ...set,
                weight: e.target.value,
              });
            }}
          />
        </label>
        <button
          onClick={() => handleDeleteSet(muscleId, set.id)}
          className=" text-red-500 font-bold py-1 px-1 rounded"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>
    );
  } else {
    setContent = (
      <Fragment key={set.id}>
        <section className=" flex gap-3 p-3 items-center">
          <p className="text-base font-bold ">
            Set <span className="block font-normal">{set.set}</span>
          </p>
          <p className="text-base font-bold ">
            Lb <span className="block font-normal">{set.weight}</span>
          </p>
          <button
            onClick={() => handleDeleteSet(muscleId, set.id)}
            className=" text-red-500 font-bold py-1 px-1 rounded"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </section>
      </Fragment>
    );
  }

  return <section>{setContent}</section>;
};
