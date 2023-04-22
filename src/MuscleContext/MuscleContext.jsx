import { createContext, useState } from "react";

export const MuscleContext = createContext();

export const MuscleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const [muscles, setMuscles] = useState(() => [
    {
      id: new Date().getTime(),
      muscle: "Test 1",
      exercises: [
        {
          id: new Date().getTime() * 100,
          sets: "2 ",
          weight: "300 ",
          reps: "10",
        },
        {
          id: new Date().getTime() * 10,
          sets: "5 ",
          weight: "200",
          reps: "4 ",
        },
      ],
    },
    {
      id: new Date().getTime() * 200,
      muscle: "Test 2",
      exercises: [
        {
          id: new Date().getTime() + 10,
          reps: "3 ",
          sets: "2 ",
          weight: "300 ",
        },
        {
          id: new Date().getTime(),
          reps: "4 ",
          sets: "5 ",
          weight: "200",
        },
      ],
    },
  ]);

  function handleDeleteExercise(id) {
    setMuscles(muscles.filter((m) => m.id !== id));
  }

  return (
    <MuscleContext.Provider
      value={{ muscles, setMuscles, handleDeleteExercise }}
    >
      {children}
    </MuscleContext.Provider>
  );
};
