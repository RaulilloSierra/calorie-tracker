import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories.ts";
import type { Activities } from "../types/index.ts";
import { ActivityActions, ActivityState } from "../reducers/activityReducer.ts";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};

const initialState: Activities = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

function Form({ dispatch, state }: FormProps) {
  const [activity, setActivity] = useState<Activities>(initialState);

  useEffect(() => {
    if (state.activeId) {
      const selectActivity = state.activities.filter(
        (stActivity) => stActivity.id === state.activeId
      )[0];
      setActivity(selectActivity);
    }
  }, [state.activeId]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { value, id } = e.target;
    const isNumberfield = ["category", "calories"].includes(id);
    setActivity({
      ...activity,
      [id]: isNumberfield ? +value : value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({
      ...initialState,
      id: uuidv4(),
    });
  };

  return (
    <>
      <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">
            Categoria:{" "}
          </label>
          <select
            id="category"
            className="border border-slate-300 rounded-lg w-full bg-white p-2"
            value={activity.category}
            onChange={handleChange}
          >
            {" "}
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold">
            Actividad:{" "}
          </label>
          <input
            id="name"
            type="text"
            className="border-slate-300 p-2 rounded-lg border"
            placeholder="Ej. comida, jugo de naranja, caminata, entre otros"
            value={activity.name}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">
            Calorias:{" "}
          </label>
          <input
            id="calories"
            type="number"
            className="border-slate-300 p-2 rounded-lg border"
            placeholder="Calorias. Ej. 200"
            value={activity.calories}
            onChange={handleChange}
          />

          <input
            className="bg-gray-800 hover:bg-gray-600 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10 disabled:cursor-no-drop"
            type="submit"
            value={
              activity.category === 1 ? "Guardar comida" : "Guardar ejercicio"
            }
            disabled={!isValidActivity()}
          />
        </div>
      </form>
    </>
  );
}

export default Form;
