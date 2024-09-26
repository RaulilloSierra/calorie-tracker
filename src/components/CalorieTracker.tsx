import { useMemo } from "react";
import { Activities } from "../types";
import CalorieDisplay from "./CalorieDisplay.tsx";

type CalorieTrackerProps = {
  activities: Activities[];
};

function CalorieTracker({ activities }: CalorieTrackerProps) {
  // Contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const totalCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );
  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 capitalize">
        <CalorieDisplay calories={caloriesConsumed} text={"consumidas"} />
        <CalorieDisplay calories={caloriesBurned} text={"quemadas"} />
        <CalorieDisplay calories={totalCalories} text={"diferencia"} />
      </div>
    </>
  );
}

export default CalorieTracker;
