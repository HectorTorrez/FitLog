import { faFloppyDisk, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMuscleContext } from "../../hooks/useMuscleContext";

export const MuscleTitle = ({
  muscle,
  isMuscleEditing,
  setIsMuscleEditing,
}) => {
  const { handleEditMuscle } = useMuscleContext();

  let muscleContent;
  if (isMuscleEditing) {
    muscleContent = (
      <>
        <button
          className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
          onClick={() => setIsMuscleEditing(false)}
        >
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>

        <input
          type="text"
          value={muscle.muscles}
          onChange={(e) =>
            handleEditMuscle(muscle, {
              ...muscle,
              muscle: e.target.value,
            })
          }
        />
      </>
    );
  } else {
    muscleContent = (
      <>
        <button
          className="text-yellow-600 font-bold py-1 px-1 rounded   "
          onClick={() => setIsMuscleEditing(true)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <h2
          //   onClick={() => handleToggleMuscle(muscle.id)}
          className="text-4xl font-bold w-52"
        >
          {muscle.muscle}
        </h2>
      </>
    );
  }
  return <div>{muscleContent}</div>;
};
