import { createContext, useState } from "react";

export const MuscleContext = createContext();

export const MuscleProvider = ({ children }) => {
  const [muscles, setMuscles] = useState(() => [
    {
      id: new Date().getTime(),
      muscle: "Test 1",
      exercises: [
        {
          id: new Date().getTime() * 100,
          exercise: "test",
          sets: "2 ",
          reps: "10",
          mySets: [
            {
              id: new Date().getTime() * 1000,
              set: "1",
              weight: "10",
            },
            {
              id: new Date().getTime() * 1000,
              set: "2",
              weight: "10",
            },
            {
              id: new Date().getTime() * 1000,
              set: "3",
              weight: "10",
            },
          ],
        },
        {
          id: new Date().getTime() * 10,
          exercise: "test",
          sets: "5 ",

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
        },
        {
          id: new Date().getTime(),
          exercise: "test",
          reps: "4 ",
          sets: "5 ",
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
                  reps: "",
                },
              ],
            }
          : m
      )
    );
  }

  function handleChangeExercise(muscleId, nextExercise) {
    console.log(nextExercise);
    setMuscles(
      muscles.map((m) => ({
        ...m,
        exercises: m.exercises.map((e) => ({
          ...e,
          exercise:
            e.id === nextExercise.id ? nextExercise.exercise : e.exercise,
          sets: e.id === nextExercise.id ? nextExercise.sets : e.sets,
          reps: e.id === nextExercise.id ? nextExercise.reps : e.reps,

          // mySets: e.mySets.map((s) => ({
          //   ...s,
          //   set: s.id === nextExercise.id ? nextExercise.set : s.set,
          //   weight: s.id === nextExercise.id ? nextExercise.weight : s.weight,
          // })),
        })),
      }))
    );
  }
  // function handleChangeSets(exerciseId, nextSets) {
  //   console.log(nextSets);
  //   setMuscles(
  //     muscles.map((m) => ({
  //       ...m,
  //       exercises: m.exercises.map((e) => ({
  //         ...e,
  //         mySets: e.mySets.map((s) => ({
  //           ...s,
  //           set: s.id === nextSets.id ? nextSets.set : s.set,
  //           weight: s.id === nextSets.id ? nextSets.weight : s.weight,
  //         })),
  //       })),
  //     }))
  //   );
  // }

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
        // handleChangeSets,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};
