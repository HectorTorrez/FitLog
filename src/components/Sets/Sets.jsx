import { Fragment, useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sets = ({ set, isEditing, muscleId, exerciseId, updateSet }) => {
  const [inputSet, setInputSet] = useState(set.set);
  const [inputWeight, setInputWeight] = useState(set.weight);
  const [setId, setSetId] = useState(set.id);
  const { handleChangeSets, handleDeleteSet } = useMuscleContext();

  // const updateExercise = async () => {
  //   try {
  //     const musclesRef = doc(db, "muscles1", muscleId);

  //     await updateDoc(musclesRef, {
  //       exercises: [
  //         {
  //           id: new Date().getTime(),
  //           exercise: inputExercise,
  //           sets: sets,
  //           reps: reps,
  //           mySets: [
  //             {
  //               id: new Date().getTime(),
  //               set: inputSet,
  //               weight: inputWeight,
  //             },
  //           ],
  //         },
  //       ],
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return () => unsuscribe();
  // };

  const handleSave = () => {
    updateSet({ setId, inputSet, inputWeight });
  };

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
        <section className=" flex  gap-3 p-3  w-40 ">
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
