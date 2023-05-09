import { useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { Sets } from "../Sets/Sets";

export const MySets = ({
  exercise,
  muscleId,
  isEditing,
  exerciseId,
  updateSet,
}) => {
  return (
    <>
      {exercise?.map((set) => (
        <Sets
          key={set.id}
          set={set}
          isEditing={isEditing}
          muscleId={muscleId}
          exerciseId={exerciseId}
          updateSet={updateSet}
        />
      ))}
    </>
  );
};
