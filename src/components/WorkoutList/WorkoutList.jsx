export const WorkoutList = ({ workoutLog }) => {
  console.log(workoutLog)
  return (
    <section>
      <h1>HOLA</h1>
      {
        workoutLog.map(workout => {
          <header header key={workout.muscle} >
            <h2>{workout.muscle}</h2>

            <section key={workout.day}>
              <label htmlFor="exercise">Exercise: </label>
              <input type="exercise" name="exercise" id="exercise" value={workout.exercise} onChange={(e) => setWorkout(e.target.value)} />
              <label htmlFor="sets">Sets: </label>
              <input type="sets" name="sets" id="sets" value={workout.sets} onChange={(e) => setWorkout(e.target.value)} />
              <label htmlFor="reps">Reps: </label>
              <input type="reps" name="reps" id="reps" value={workout.reps} onChange={(e) => setWorkout(e.target.value)} />
              <label htmlFor="weight">Weight: </label>
              <input type="weight" name="weight" id="weight" value={workout.weight} onChange={(e) => setWorkout(e.target.value)} />
            </section>


          </header>
        })
      }
    </section >
  )
}