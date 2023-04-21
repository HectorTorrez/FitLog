import { useState } from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";

export const ExerciseCard = ({ muscles }) => {
  console.log(muscles);

  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section className=" flex flex-col gap-3 ">
      {muscles.map((muscle) => (
        <section
          onClick={handleToggle}
          className="bg-slate-400"
          key={muscle.id}
        >
          <h2>{muscle.muscle}</h2>

          <ExerciseForm muscle={muscle} />
        </section>
      ))}
    </section>
  );
};
