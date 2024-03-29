import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

export const MuscleContext = createContext();

export const MuscleProvider = ({ children }) => {
  const [muscles, setMuscles] = useState(() => []);

  const [addMuscleError, setAddMuscleError] = useState(null);
  const muscleRef = collection(db, "muscles1");

  async function handleAddMuscle(muscle) {
    if (muscle.length <= 1) {
      return setAddMuscleError(
        "Muscle group must be at least 2 characters long"
      );
    }

    try {
      await addDoc(muscleRef, {
        muscle: muscle,
        createAt: serverTimestamp(),
        user: auth.currentUser.uid,
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
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleShowMuscle(id) {
    if (muscles.newID === id) {
      set;
    }
  }

  useEffect(() => {
    const queryMuscles = query(muscleRef, orderBy("createAt"), limit(7));
    const unsuscribe = onSnapshot(queryMuscles, (snapshot) => {
      const firestoreMuscles = [];
      snapshot.forEach((doc) => {
        if (doc.data().user !== auth.currentUser.uid) return;
        firestoreMuscles.push({ ...doc.data(), newID: doc.id });
      });

      setMuscles(firestoreMuscles);
    });

    return () => unsuscribe();
  }, []);

  // async function handleClearMuscle() {
  //   confirm("Are you sure you want to clear all muscle groups?")
  //     ? await deleteDoc(doc(db, "muscles1"))
  //     : null;
  // }

  async function handleDeleteMuscle(id) {
    console.log(id);
    try {
      const confirmDeleteMuscle = confirm(
        "Are you sure you want to delete this muscle group?"
      );
      if (!confirmDeleteMuscle) return;
      await deleteDoc(doc(db, "muscles1", id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddExercise(muscleId) {
    try {
      await updateDoc(doc(db, "muscles1", muscleId), {
        exercises: arrayUnion({
          id: new Date().getTime().toString(),
          exercise: "",
          sets: "",
          reps: "",
          mySets: [
            {
              id: new Date().getTime().toString(),
              set: "",
              weight: "",
            },
          ],
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddSet(muscleId, exerciseId) {
    const newSet = {
      id: new Date().getTime().toString(),
      set: "",
      weight: "",
    };

    try {
      const musclesRef = doc(db, "muscles1", muscleId);
      const snapshot = await getDoc(musclesRef);
      const muscle = snapshot.data();

      const exercises = muscle.exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          const mySets = [...exercise.mySets, newSet];
          return { ...exercise, mySets };
        } else {
          return exercise;
        }
      });

      await updateDoc(musclesRef, { exercises });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteSet(muscleId, exerciseId, setId) {
    console.log(setId);
    try {
      const confirmDeleteSet = confirm(
        "Are you sure you want to delete this set?"
      );
      if (!confirmDeleteSet) return;
      const documentRef = doc(db, "muscles1", muscleId);
      const workoutDocSnapshot = await getDoc(documentRef);
      const exercises = workoutDocSnapshot.data().exercises;
      const exerciseIndex = exercises.findIndex((e) => e.id === exerciseId);
      const mySets = exercises[exerciseIndex].mySets;
      const setIndex = mySets.findIndex((s) => s.id === setId);
      mySets.splice(setIndex, 1);
      await updateDoc(documentRef, { exercises });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteExercise(muscleId, exerciseId) {
    try {
      const confirmDeleteExercise = confirm(
        "Are you sure you want to delete this exercise?"
      );
      if (!confirmDeleteExercise) return;
      const documentRef = doc(db, "muscles1", muscleId);
      const workoutDocSnapshot = await getDoc(documentRef);
      const exercises = workoutDocSnapshot.data().exercises;
      const index = exercises.findIndex((e) => e.id === exerciseId);
      await updateDoc(documentRef, {
        exercises: arrayRemove(exercises[index]),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MuscleContext.Provider
      value={{
        addMuscleError,
        muscles,
        setMuscles,
        handleDeleteMuscle,
        handleAddMuscle,
        // handleEditExercise,
        // handleEditMuscle,
        // handleClearMuscle,
        handleAddExercise,
        handleDeleteExercise,
        // handleChangeExercise,
        // handleChangeSets,
        handleAddSet,
        handleDeleteSet,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};
