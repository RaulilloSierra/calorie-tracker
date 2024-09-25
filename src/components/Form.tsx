import { categories } from "../data/categories.ts";

function Form() {
  return (
    <div>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">
            Categoria:{" "}
          </label>
          <select
            name=""
            id="category"
            className="border border-slate-300 rounded-lg w-full bg-white p-2"
          >
            {" "}
            {categories.map((category) => (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="activity" className="font-bold">
            Actividad:{" "}
          </label>
          <input
            id="activity"
            type="text"
            className="border-slate-300 p-2 rounded-lg border"
            placeholder="Ej. comida, jugo de naranja, caminata, entre otros"
          />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">
            Actividad:{" "}
          </label>
          <input
            id="calories"
            type="number"
            className="border-slate-300 p-2 rounded-lg border"
            placeholder="Calorias. Ej. 200"
          />

          <input
            className="bg-gray-800 hover:bg-gray-600 w-full p-2 font-bold uppercase text-white cursor-pointer"
            type="submit"
            value="Guardar comida o ejercicio"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
