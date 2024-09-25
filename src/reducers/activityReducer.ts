import { Activities } from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: {
    newActivity: Activities;
  };
};

type ActivityState = {
  activities: Activities[];
};

export const initialState: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "save-activity") {
    // Este código maneja la lógica para actualizar el state
    console.log("desde el type de save-activity");
  }
  return state;
};
