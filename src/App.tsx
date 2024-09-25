import { useReducer } from "react";
import Form from "./components/Form.tsx";
import { activityReducer, initialState } from "./reducers/activityReducer.ts";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <>
      <header className="bg-green-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            contador de calorías
          </h1>
        </div>
      </header>
      <section className="bg-green-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} />
        </div>
      </section>
    </>
  );
}

export default App;
