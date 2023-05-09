import { useEffect, useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
import { AddMuscle } from "../AddMuscle/AddMuscle";

export const WorkoutForm = () => {
  return (
    <>
      <AddMuscle />
      <ExerciseCard />
    </>
  );
};
