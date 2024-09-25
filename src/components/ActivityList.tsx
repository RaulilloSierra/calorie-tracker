import { useMemo, Dispatch } from "react";
import { Activities } from "../types";
import { categories } from "../data/categories.ts";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activityReducer.ts";

type ActivityListProps = {
  activities: Activities[];
  dispatch: Dispatch<ActivityActions>;
};

function ActivityList({ activities, dispatch }: ActivityListProps) {
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
          <div className="flex gap-5 items-center">
            <button
              onClick={() =>
                dispatch({ type: "set-activeId", payload: { id: act.id } })
              }
            >
              <PencilSquareIcon className="h-8 w-8 text-gray-700" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ActivityList;
