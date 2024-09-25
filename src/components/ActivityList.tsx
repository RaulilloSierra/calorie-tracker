import { useMemo } from "react";
import { Activities } from "../types";
import { categories } from "../data/categories.ts";

type ActivityListProps = {
  activities: Activities[];
};

function ActivityList({ activities }: ActivityListProps) {
  const categoryName = useMemo(
    () => (category: Activities["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : "")),
    [activities]
  );
  return (
    <>
      <h2 className="text-4xl text-green-600 text-center font-bold">
        Comida y actividades
      </h2>
      {activities.map((act) => (
        <div
          key={act.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
                act.category === 1 ? "bg-orange-600" : "bg-lime-600"
              } `}
            >
              {categoryName(+act.category)}
            </p>
            <p className="text-2xl font-bold pt-5">{act.name}</p>
            <p className="font-black text-4xl text-green-500">
              {act.calories} <span>Calorias</span>
            </p>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
}

export default ActivityList;
