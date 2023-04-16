import { useEffect, useState } from "react"

export const ExerciseForm = ({ muscle }) => {

  const [exercises, setExercises] = useState([{
    id: new Date().getTime(),
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  }])



  const [isEdit, setIsEdit] = useState(true)
  const [showContent, setShowContent] = useState(true)

  const togleContent = () => {
    setShowContent(!showContent)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setExercises([{ ...exercises, [name]: value }])
  }

  const handleSave = (id) => {
    if (exercises.find(ex => ex.id !== id)) {
      setIsEdit(false)

    }

  }

  const handleAddExercise = () => {
    setExercises([...exercises, {
      id: new Date().getTime(),
      muscle: muscle,
      exercise: "",
      sets: "",
      reps: "",
      weight: "",
    }])
  }

  const handleEdit = () => {
    setIsEdit(true)
  }

  console.log(exercises)

  return (
    <>
      <p onClick={togleContent}>Press me for check</p>

      {

        muscle.map(mus => (

          <section className="bg-slate-100  shadow-md rounded px-1 pt-1 pb-1 mb-4" key={mus}>
            <h2 className="text-xl text-center mb-4">{mus}</h2>
            {
              showContent && (
                <>
                  <div>
                    <button onClick={handleAddExercise}>
                      Add Exercise
                    </button>


                  </div>
                  {

                    exercises.map(ex => (

                      <div className="bg-white   rounded  mb-1" key={ex.id}>
                        <div className="">

                          <label className="block text-gray-700 font-bold mb-2" htmlFor="excercise">Excersice</label>
                          {isEdit ? (
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="exercise" value={ex.exercise} onChange={handleChange} />
                          ) : (<span>{ex.exercise}</span>)}

                          <label className="block text-gray-700 font-bold mb-2" htmlFor="sets">Sets</label>
                          {
                            isEdit ? (
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="sets" value={ex.sets} onChange={handleChange} />
                            ) : (<span>{ex.sets}</span>)
                          }

                          <label className="block text-gray-700 font-bold mb-2" htmlFor="reps">Reps</label>
                          {
                            isEdit ? (
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="reps" value={ex.reps} onChange={handleChange} />
                            ) : (<span>{ex.reps}</span>)
                          }

                          <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">Weight</label>
                          {
                            isEdit ? (
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="weight" value={ex.weight} onChange={handleChange} />
                            ) : (<span>{ex.weight}</span>)
                          }

                        </div>
                        <div className="flex flex-col">
                          <button onClick={() => handleSave(ex.id)}>
                            Save
                          </button>

                          <button onClick={handleEdit}>
                            Edit
                          </button>


                        </div>
                      </div>

                    ))
                  }
                </>
              )
            }


          </section>
        ))
      }

    </>
  )
}