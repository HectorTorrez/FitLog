import { useState } from "react"

export const ExerciseForm = ({ muscle, workouts }) => {

  const [workout, setWorkout] = useState([{
    id: new Date().getTime(),
    exercise: "",
    day: new Date().toLocaleDateString(),
    sets: "",
    reps: "",
    weight: "",
  }])

  console.log(workout)
  const [isEditMode, setIsEditMode] = useState(true)

  const handleChange = (e) => {
    if (workout.id === workout.id) return
    setWorkout([{
      ...workout,
      [e.target.name]: e.target.value
    }])
  }

  const handleAddWorkout = (e) => {
    e.preventDefault()




    // const newWorkout = {
    //   id: new Date().getTime(),
    //   exercise: workout.exercise,
    //   day: new Date().toLocaleDateString(),
    //   sets: workout.sets,
    //   reps: workout.reps,
    //   weight: workout.weight,
    // }
    // setWorkout([...workout, newWorkout])
    setIsEditMode(false)

  }

  const handleEditWorkout = () => {
    const idEditWorkout = workout.find(workout => workout.id === workout.id)

    setIsEditMode(true)
  }

  const handleAddNewList = () => {
    setWorkout([...workout, {
      id: new Date().getTime() + 1,
      exercise: "",
      sets: "",
      reps: "",
      weight: "",
    }])

  }









  return (
    <>
      {
        workouts.map((workout) => (
          <section key={workout.id}>
            <div>
              <h2>{workout.muscle}</h2>
            </div>
            <div key={workout.id}>
              <label htmlFor="exercise">Exercise: </label>
              {isEditMode ? (
                <input type="exercise" name="exercise" id="exercise" value={workout.exercise} onChange={handleChange} />
              ) : <span>{workout.exercise}</span>}
              <label htmlFor="sets">Sets: </label>
              {isEditMode ? (
                <input type="sets" name="sets" id="sets" value={workout.sets} onChange={handleChange} />
              ) : <span>{workout.sets}</span>}
              <label htmlFor="reps">Reps: </label>
              {isEditMode ? (
                <input type="reps" name="reps" id="reps" value={workout.reps} onChange={handleChange} />
              ) : <span>{workout.reps}</span>}
              <label htmlFor="weight">Weight: </label>
              {isEditMode ? (
                <input type="weight" name="weight" id="weight" value={workout.weight} onChange={handleChange} />
              ) : <span>{workout.weight}</span>}
            </div>

            < button onClick={handleAddWorkout} >
              Add
            </ button >
            <button onClick={handleEditWorkout}>Edit</button>
            <button onClick={handleAddNewList}>Add New List</button>
          </section>
        ))
      }





    </>
  )
}