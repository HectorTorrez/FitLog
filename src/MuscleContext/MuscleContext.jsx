import { createContext, useState } from "react";

export const MuscleContext = createContext();

export const MuscleProvider = ({ children }) => {
  const [muscles, setMuscles] = useState([]);
  // () => [
  //   {
  //     id: new Date().getTime(),
  //     muscle: "Test 1",
  //     exercises: [
  //       {
  //         id: new Date().getTime() * 100,
  //         exercise: "test",
  //         sets: "2 ",
  //         reps: "10",
  //         mySets: [
  //           {
  //             id: new Date().getTime() * 1442,
  //             set: "1",
  //             weight: "10lbs - 8reps",
  //           },
  //           {
  //             id: new Date().getTime() * 1025,
  //             set: "2",
  //             weight: "10",
  //           },
  //           {
  //             id: new Date().getTime() * 1214,
  //             set: "3",
  //             weight: "100",
  //           },
  //         ],
  //       },
  //       {
  //         id: new Date().getTime() * 100,
  //         exercise: "test",
  //         sets: "2 ",
  //         reps: "10",
  //         mySets: [
  //           {
  //             id: new Date().getTime() * 1444,
  //             set: "1",
  //             weight: "10lbs - 10reps",
  //           },
  //           {
  //             id: new Date().getTime() * 1025,
  //             set: "2",
  //             weight: "10",
  //           },
  //           {
  //             id: new Date().getTime() * 1214,
  //             set: "3",
  //             weight: "100",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: new Date().getTime() * 200,
  //     muscle: "Test 2",
  //     exercises: [
  //       {
  //         id: new Date().getTime() + 10,
  //         exercise: "test",
  //         reps: "3 ",
  //         sets: "2 ",
  //         mySets: [
  //           {
  //             id: new Date().getTime() * 100,
  //             set: "1",
  //             weight: "10",
  //           },
  //           {
  //             id: new Date().getTime() * 1001,
  //             set: "2",
  //             weight: "10",
  //           },
  //           {
  //             id: new Date().getTime() * 1002,
  //             set: "3",
  //             weight: "10",
  //           },
  //         ],
  //       },
  //       {
  //         id: new Date().getTime(),
  //         exercise: "test",
  //         reps: "4 ",
  //         sets: "5 ",
  //         mySets: [
  //           {
  //             id: new Date().getTime() * 1005,
  //             set: "1",
  //             weight: "10",
  //           },
  //           {
  //             id: new Date().getTime() * 10,
  //             set: "2",
  //             weight: "10",
  //           },
  //           {
  //             id: new Date().getTime() * 1010,
  //             set: "3",
  //             weight: "10",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]

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
                  mySets: [
                    {
                      id: new Date().getTime() * 100,
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

  function handleAddSet(muscleId) {
    const confirmAdd = confirm("Are you sure you want to add a set?");
    if (!confirmAdd) return;
    setMuscles(
      muscles.map((m) =>
        m.id === muscleId
          ? {
              ...m,
              exercises: m.exercises.map((e) => ({
                ...e,
                mySets: [
                  ...e.mySets,
                  {
                    id: new Date().getTime(),
                    set: "",
                    weight: "",
                  },
                ],
              })),
            }
          : m
      )
    );
  }

  function handleDeleteSet(muscleId, setId) {
    const confirmDelete = confirm("Are you sure you want to delete this set?");
    if (!confirmDelete) return;
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
        handleChangeSets,
        handleAddSet,
        handleDeleteSet,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};
