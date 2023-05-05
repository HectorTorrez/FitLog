import { useState } from "react";
import { useMuscleContext } from "../../hooks/useMuscleContext";
import { Sets } from "../Sets/Sets";

export const MySets = ({
  exercise,
  muscleId,
  isEditing,
  setInputSet,
  inputSet,
  inputWeight,
  setInputWeight,
  exerciseId,
}) => {
  return (
    <>
      {exercise?.mySets.map((set) => (
        <Sets
          key={set.id}
          set={set}
          isEditing={isEditing}
          muscleId={muscleId}
          setInputSet={setInputSet}
          inputSet={inputSet}
          inputWeight={inputWeight}
          setInputWeight={setInputWeight}
          exerciseId={exerciseId}
        />
      ))}
    </>
  );
};
