export const FormSet = ({
  inputSet,
  set,
  setInputSet,
  inputWeight,
  setInputWeight,
}) => {
  return (
    <>
      <label htmlFor="set">
        <p className="text-base font-bold">Set</p>

        <input
          className="w-8 shadow appearance-none border rounded p-1
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={inputSet}
          name={set.id}
          onChange={(e) => setInputSet(e.target.value)}
        />
      </label>
      <label htmlFor="weight">
        <p className="text-base font-bold">Weight</p>

        <input
          className="w-16 shadow appearance-none border rounded p-1
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={inputWeight}
          name={set.id}
          onChange={(e) => setInputWeight(e.target.value)}
        />
      </label>
    </>
  );
};
