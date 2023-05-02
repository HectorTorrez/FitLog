import { createContext, useState } from "react";

export const MuscleContext = createContext();

export const MuscleProvider = ({ children }) => {
  const [muscles, setMuscles] = useState(() => []);
  const [toggle, setToggle] = useState(false);

  const [addMuscleError, setAddMuscleError] = useState(null);

  function handleAddMuscle(muscle) {
    console.log(muscle);
    if (muscle.length <= 1)
      return setAddMuscleError(
        "Muscle group must be at least 2 characters long"
      );
    setMuscles([
      ...muscles,
      {
        id: new Date().getTime(),
        muscle: muscle,
        exercises: [
          {
            id: new Date().getTime() * 100,
            exercise: "",
            sets: "",
            reps: "",
            mySets: [
              {
                id: new Date().getTime() * 1000,
                set: "",
                weight: "",
              },
            ],
          },
        ],
      },
    ]);
    setAddMuscleError(null);
  }

  // function handleEditMuscle(muscleId, nextMuscle) {
  //   console.log(nextMuscle);
  //   muscles.map((m) =>
  //     m.id === muscleId
  //       ? {
  //           ...m,
  //           muscle: nextMuscle,
  //         }
  //       : m
  //   );
  // }

  // function handleToggleMuscle(id) {
  //   console.log(id);
  //   const knowMuscle = muscles.filter((m) => m.id === id);
  //   if (knowMuscle) {
  //     setToggle(!toggle);
  //   } else {
  //     setToggle(false);
  //   }
  // }

  function handleClearMuscle() {
    confirm("Are you sure you want to clear all muscle groups?")
      ? setMuscles([])
      : null;
  }

  function handleDeleteMuscle(id) {
    const confirmDeleteMuscle = confirm(
      "Are you sure you want to delete this muscle group?"
    );
    if (!confirmDeleteMuscle) return;
    setMuscles(muscles.filter((m) => m.id !== id));
  }

  function handleAddExercise(muscleId) {
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
                  reps: "",
                  mySets: [
                    {
                      id: new Date().getTime(),
                      set: "",
                      weight: "",
                    },
                  ],
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
          reps: e.id === nextExercise.id ? nextExercise.reps : e.reps,
        })),
      }))
    );
  }

  function handleChangeSets(muscleId, nextSet) {
    setMuscles(
      muscles.map((m) => ({
        ...m,
        exercises: m.exercises.map((e) => ({
          ...e,
          mySets: e.mySets.map((s) => ({
            ...s,
            set: s.id === nextSet.id ? nextSet.set : s.set,
            weight: s.id === nextSet.id ? nextSet.weight : s.weight,
          })),
        })),
      }))
    );
  }

  function handleAddSet(muscleId, exerciseId) {
    setMuscles(
      muscles.map((m) =>
        m.id === muscleId
          ? {
              ...m,

              exercises: m.exercises.map((e) => {
                if (e.id === exerciseId) {
                  return {
                    ...e,
                    mySets: [
                      ...e.mySets,
                      {
                        id: new Date().getTime(),
                        set: "",
                        weight: "",
                      },
                    ],
                  };
                } else {
                  return e;
                }
              }),
            }
          : m
      )
    );
  }

  function handleDeleteSet(muscleId, setId) {
    const confirmDeleteSet = confirm(
      "Are you sure you want to delete this set?"
    );
    if (!confirmDeleteSet) return;
    setMuscles(
      muscles.map((m) =>
        m.id === muscleId
          ? {
              ...m,
              exercises: m.exercises.map((e) => ({
                ...e,
                mySets: e.mySets.filter((s) => s.id !== setId),
              })),
            }
          : m
      )
    );
  }

  function handleDeleteExercise(muscleId, exerciseId) {
    const confirmDeleteExercise = confirm(
      "Are you sure you want to delete this exercise?"
    );
    if (!confirmDeleteExercise) return;
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
        addMuscleError,
        muscles,
        setMuscles,
        handleDeleteMuscle,
        handleAddMuscle,
        // handleEditMuscle,
        handleClearMuscle,
        handleAddExercise,
        handleDeleteExercise,
        handleChangeExercise,
        handleChangeSets,
        handleAddSet,
        handleDeleteSet,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};
