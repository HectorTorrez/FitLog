import { Sets } from "../Sets/Sets";

export const MySets = ({
  exercise,
  muscleId,
  isSetEditing,
  setIsSetEditing,
  exerciseId,
  updateSet,
}) => {
  return (
    <>
      {exercise?.map((set) => (
        <Sets
          key={set.id}
          set={set}
          isSetEditing={isSetEditing}
          setIsSetEditing={setIsSetEditing}
          muscleId={muscleId}
          exerciseId={exerciseId}
          updateSet={updateSet}
        />
      ))}
    </>
  );
};
