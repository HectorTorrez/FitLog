import { useState } from "react"
import { ExerciseForm } from "../ExerciseForm/ExerciseForm"

export const WorkoutForm = () => {

  const [muscle, setMuscle] = useState([])
  const [muscleInput, setMuscleInput] = useState('')
  const [showExerciseForm, setShowExerciseForm] = useState(false)
  const [alert, setAlert] = useState(false)

  const handleDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleClear = () => {
    setMuscle([])
    setShowExerciseForm(false)
  }

  const handleSubmit = () => {
    if (muscleInput === '') return
    if (muscle.includes(muscleInput)) {
      setAlert(true)
      return
    }
    setMuscle([...muscle, muscleInput])
    setShowExerciseForm(true)
    setMuscleInput('')
    setAlert(false)
  }

  return (
    <section className="max-w-md mx-auto">

      {
        alert && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5">
          <p className="text-red-500">Muscle already exists</p>
        </div>
      }
      <label className="block text-gray-700 font-bold mb-2" htmlFor="">Muscle</label>
      <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Add Muscle" type="text" name="muscle" value={muscleInput} onChange={(event) => setMuscleInput(event.target.value)} onKeyDown={handleDown} />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
        Add Muscle
      </button>

      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClear}>
        Clear
      </button>

      {
        showExerciseForm &&
        <ExerciseForm muscle={muscle} />

      }

    </section>
  )
}