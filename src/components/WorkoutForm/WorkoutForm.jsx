import { useState } from "react"
import { ExerciseForm } from "../ExerciseForm/ExerciseForm"

export const WorkoutForm = ({ onAddWorkout }) => {
  const [isWorkoutCreate, setIsWorkoutCreate] = useState(false)
  const [workouts, setWorkouts] = useState([{
    muscleDay: "",
    id: new Date().getTime(),
    exercises: {
      name: "",
      day: new Date().toLocaleDateString(),
      sets: "",
      reps: "",
      weight: "",
    }
  }])




  const handleSubmit = (e) => {
    e.preventDefault()
    if (workouts.muscleDay === "") return
    // const newWorkout = {
    //   id: new Date().getTime(),
    //   exercise: workouts.exercise,
    //   day: new Date().toLocaleDateString(),
    //   sets: workouts.sets,
    //   reps: workouts.reps,
    //   weight: workouts.weight,


    // }
    // if (workouts.id === newWorkout.id) return
    // setWorkouts([...workouts, newWorkout])

    const newMuscle = (workouts)
    onAddWorkout(newMuscle)
    // onAddWorkout({
    //   muscleDay: "",
    //   exercises: {
    //     name: "",
    //     day: new Date().toLocaleDateString(),
    //     sets: "",
    //     reps: "",
    //     weight: "",
    //   }
    // })

    setIsWorkoutCreate(true)
    setMuscle("")
  }


  const handleDelete = (id) => {
    const newWorkout = workouts.filter(workout => workout.id !== id)
    setWorkouts(newWorkout)
  }

  const handleDeleteAll = () => {
    setWorkouts([])
  }

  const handleChange = (e) => {
    setWorkouts([{
      ...workouts,
      [e.target.name]: e.target.value
    }])
  }

  return (
    <div>
      <label htmlFor="exercise">Muscle: </label>
      <input type="muscle" name="muscle" value={workouts.muscleDay} onChange={handleChange} />
      <button onClick={handleSubmit}>Create</button>
      <button onClick={handleDeleteAll}>
        Delete All
      </button>
      {/* {
        workouts?.map((workout) => (
          < section key={workout.id} >
            <div>
              <h2>{workout.muscle}</h2>
            </div>
            <div key={workout.id}>
              <label htmlFor="exercise">Exercise: </label>
              <input type="exercise" name="exercise" id="exercise" value={workout.exercises.name} onChange={handleChange} />
              <label htmlFor="sets">Sets: </label>
              <input type="sets" name="sets" id="sets" value={workout.exercises.sets} onChange={handleChange} />
              <label htmlFor="reps">Reps: </label>
              <input type="reps" name="reps" id="reps" value={workout.exercises.reps} onChange={handleChange} />
              <label htmlFor="weight">Weight: </label>
              <input type="weight" name="weight" id="weight" value={workout.exercises.weight} onChange={handleChange} />
              <button onClick={() => handleDelete(workout.id)}>Delete</button>
            </div>
          </section >
        ))
      } */}




      {/* <div>
        {
          isWorkoutCreate &&
          <ExerciseForm workouts={workouts} />

        }
      </div> */}
    </div >
  )
}