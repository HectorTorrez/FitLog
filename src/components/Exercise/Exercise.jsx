export const Exercise = ({ muscle, isEdit, handleEdit, handleAdd }) => {
  return (
    <>
      {muscle.exercises.map((data) => (
        <section
          className=" flex items-center gap-2 w-full  text-start mb-3"
          key={data.id}
        >
          {isEdit ? (
            <input
              className="w-16 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="exercise"
              value={data.sets}
            />
          ) : (
            <span>Sets: {data.sets}</span>
          )}
          {isEdit ? (
            <input
              className=" w-16 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="exercise"
              value={data.weight}
            />
          ) : (
            <span>Weight: {data.weight} lbs</span>
          )}
          {isEdit ? (
            <input
              className=" w-16 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="exercise"
              value={data.reps}
            />
          ) : (
            <span>Reps: {data.reps}</span>
          )}

          <div className=" flex gap-2 justify-end w-full">
            <button
              onClick={handleAdd}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline"
            >
              Add
            </button>
            <button
              onClick={() => handleEdit(data.id)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
          </div>
        </section>
      ))}
    </>
  );
};
