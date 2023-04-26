import { createContext, useState } from "react";

export const MuscleContext = createContext();

export const MuscleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [isMuscle, setIsMuscle] = useState(false);

  const [muscles, setMuscles] = useState(() => [
    {
      id: new Date().getTime(),
      muscle: "Test 1",
      exercises: [
        {
          id: new Date().getTime() * 100,
          exercise: "test",
          sets: "2 ",
          weight: "300 ",
          reps: "10",
        },
        {
          id: new Date().getTime() * 10,
          exercise: "test",
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
          exercise: "test",
          reps: "3 ",
          sets: "2 ",
          weight: "300 ",
        },
        {
          id: new Date().getTime(),
          exercise: "test",
          reps: "4 ",
          sets: "5 ",
          weight: "200",
        },
      ],
    },
  ]);

  function handleAddMuscle(muscle) {
    if (!muscle) return;
    setMuscles([
      ...muscles,
      {
        id: new Date().getTime(),
        muscle,
        exercises: [
          {
            id: new Date().getTime() * 100,
            exercise: "",
            sets: "",
            weight: "",
            reps: "",
          },
        ],
      },
    ]);
  }

  function handleEditMuscle(nextMuscle) {
    muscles.map((m) => ({
      ...m,
      muscle: m.id === nextMuscle.id ? nextMuscle.muscle : m.muscle,
    }));
  }

  // function handleToggleMuscle(id) {
  //   setToggle(!toggle);
  // }

  function handleClearMuscle() {
    setMuscles([]);
  }

  function handleDeleteMuscle(id) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this muscle group?"
    );
    if (!confirmDelete) return;
    setMuscles(muscles.filter((m) => m.id !== id));
  }

  function handleAddExercise(muscleId) {
    const confirmAdd = confirm("Are you sure you want to add an exercise?");
    if (!confirmAdd) return;
    setMuscles(
      muscles.map((m) =>
        m.id === muscleId
          ? {
              ...m,
              exercises: [
                ...m.exercises,
                {
                  id: new Date().getTime(),
                  exercise: "",
                  sets: "",
                  weight: "",
                  reps: "",
                },
              ],
            }
          : m
      )
    );
  }

  function handleChangeExercise(muscleId, nextExercise) {
    setMuscles(
      muscles.map((m) => ({
        ...m,
        exercises: m.exercises.map((e) => ({
          ...e,
          exercise:
            e.id === nextExercise.id ? nextExercise.exercise : e.exercise,
          sets: e.id === nextExercise.id ? nextExercise.sets : e.sets,
          weight: e.id === nextExercise.id ? nextExercise.weight : e.weight,
          reps: e.id === nextExercise.id ? nextExercise.reps : e.reps,
        })),
      }))
    );
  }

  function handleDeleteExercise(muscleId, exerciseId) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this exercise?"
    );
    if (!confirmDelete) return;
    setMuscles(
      muscles.map((m) =>
        m.id === muscleId
          ? {
              ...m,
              exercises: m.exercises.filter((e) => e.id !== exerciseId),
            }
          : m
      )
    );
  }

  return (
    <MuscleContext.Provider
      value={{
        muscles,
        setMuscles,
        handleDeleteMuscle,
        handleAddMuscle,
        handleEditMuscle,
        handleClearMuscle,
        handleAddExercise,
        handleDeleteExercise,
        handleChangeExercise,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};
