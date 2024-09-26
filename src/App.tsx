import { useEffect, useMemo, useReducer } from "react";
import { activityReducer, initialState } from "./reducers/activityReducer.ts";
import Form from "./components/Form.tsx";
import ActivityList from "./components/ActivityList.tsx";
import CalorieTracker from "./components/CalorieTracker.tsx";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = () =>
    useMemo(() => state.activities.length > 0, [state.activities]);

  return (
    <>
      <header className="bg-green-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center font-bold text-5xl text-white uppercase py-3">
            contador de calorías
          </h1>
          <button
            className="bg-red-700 hover:bg-red-500 text-white p-2 font-bold uppercase cursor-pointer rounded-lg text-base m-3 disabled:bg-gray-200  disabled:cursor-not-allowed"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar app
          </button>
        </div>
      </header>
      <section className="bg-green-500 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>
      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker activities={state.activities}/>
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
