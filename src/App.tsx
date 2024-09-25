import { useEffect, useReducer } from "react";
import Form from "./components/Form.tsx";
import { activityReducer, initialState } from "./reducers/activityReducer.ts";
import ActivityList from "./components/ActivityList.tsx";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  return (
    <>
      <header className="bg-green-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center font-bold text-5xl text-white uppercase py-3">
            contador de calorías
          </h1>
        </div>
      </header>
      <section className="bg-green-500 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
