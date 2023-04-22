import { useEffect, useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
import { AddMuscle } from "../AddMuscle/AddMuscle";

const initialExercises = [];

export const WorkoutForm = () => {
  return (
    <>
      <AddMuscle />
      <ExerciseCard />
    </>
  );
};
