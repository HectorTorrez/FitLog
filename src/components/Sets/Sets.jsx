import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sets = ({
  set,
  muscleId,
  exerciseId,
  updateSet,
  isSetEditing,
  setIsSetEditing,
}) => {
  const [inputSet, setInputSet] = useState(set.set);
  const [inputWeight, setInputWeight] = useState(set.weight);
  const [setId, setSetId] = useState(set.id);
  const { handleChangeSets, handleDeleteSet } = useMuscleContext();

  const handleSave = () => {
    updateSet({ setId, inputSet, inputWeight, exerciseId });
  };

  let setContent;
  if (isSetEditing) {
    setContent = (
      <section
        key={set.id}
        className="grid grid-flow-col lg:grid-cols-4 items-end "
      >
        <button
          className="text-yellow-600 font-bold py-1 px-1 rounded   "
          onClick={() => setIsSetEditing(false)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
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
        <div>
          <button
            className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
            onClick={handleSave}
          >
            <FontAwesomeIcon icon={faFloppyDisk} />
          </button>

          <button
            onClick={() => handleDeleteSet(muscleId, exerciseId, set.id)}
            className=" text-red-500 font-bold py-1 px-1 rounded"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </section>
    );
  } else {
    setContent = (
      <Fragment key={set.id}>
        <section className=" flex  lg:grid-cols-2 items-center   ">
          <button
            className="text-yellow-600 font-bold py-1 px-1 rounded   "
            onClick={() => setIsSetEditing(true)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <p className="text-base font-bold w-40  ">
            Set <span className="block font-normal ">{set.set}</span>
          </p>
          <p className="text-base font-bold w-52">
            Lb <span className="block font-normal ">{set.weight}</span>
          </p>
          <div>
            <button
              className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
              onClick={handleSave}
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
            <button
              onClick={() => handleDeleteSet(muscleId, exerciseId, set.id)}
              className=" text-red-500 font-bold  rounded"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </section>
      </Fragment>
    );
  }

  return <>{setContent}</>;
};
