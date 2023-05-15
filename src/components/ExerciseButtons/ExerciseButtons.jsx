import {
  faDumbbell,
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExerciseButtons = ({
  handleAddSet,
  handleUpdateExercise,
  setIsEditing,
  handleDeleteExercise,
}) => {
  return (
    <>
      <button
        onClick={() => handleAddSet(muscleId, exercise.id)}
        className=" text-blue-500  py-1 px-1 font-bold   rounded focus:outline-none focus:shadow-outline"
      >
        <FontAwesomeIcon icon={faDumbbell} />
      </button>
      <button
        className=" text-blue-500 font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline "
        onClick={handleUpdateExercise}
      >
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
      <button
        className="text-yellow-600 font-bold py-1 px-1 rounded   "
        onClick={() => setIsEditing(false)}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <button
        onClick={() => handleDeleteExercise(muscleId, exercise.id)}
        className=" text-red-500 font-bold  rounded "
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
};
