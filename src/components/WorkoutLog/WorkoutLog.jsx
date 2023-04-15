
import { useState } from "react"
import { WorkoutForm } from "../WorkoutForm/WorkoutForm"
import { WorkoutList } from "../WorkoutList/WorkoutList"

export const WorkoutLog = () => {
  const [workoutLog, setWorkoutLog] = useState([])

  const addWorkout = (newWorkout) => {
    // const exercise = {
    //   exercise: newWorkout.muscle,
    //   ...newWorkout.workout
    // }

    setWorkoutLog([...workoutLog, newWorkout])
  }

  console.log(workoutLog)
  return (
    <div className="">
      <h1>Workout Log</h1>

      <WorkoutForm onAddWorkout={addWorkout} />
      <WorkoutList workoutLog={workoutLog} />
    </div>
  )
}