import { createContext } from 'react';

export const MuscleExerciseContext = createContext();

export const MuscleExerciseProvider = ({ children }) => {

  const [exercises, setExercises] = useState([])

  const addExcercise = (exercises) => {
    setExercises([...excerexercisescises, exercises])
  }


  return (
    <MuscleExerciseContext.Provider>
      {children}
    </MuscleExerciseContext.Provider>
  )
}