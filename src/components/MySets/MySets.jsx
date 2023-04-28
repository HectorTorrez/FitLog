import { useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { Sets } from "../Sets/Sets";

export const MySets = ({ exercise, muscleId, isEditing }) => {
  return (
    <>
      {exercise?.mySets.map((set) => (
        <Sets
          key={set.id}
          set={set}
          isEditing={isEditing}
          muscleId={muscleId}
        />
      ))}
    </>
  );
};
