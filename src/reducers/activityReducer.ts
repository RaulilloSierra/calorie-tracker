import { Activities } from "../types";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activities } }
  | { type: "set-activeId"; payload: { id: Activities["id"] } }
  | { type: "delete-activity"; payload: { id: Activities["id"] } };

export type ActivityState = {
  activities: Activities[];
  activeId: Activities["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  switch (action.type) {
    case "save-activity":
      // A partir de aquí se puede codear lógica hasta el return
      let updateActivities: Activities[] = [];
      if (state.activeId) {
        updateActivities = state.activities.map((act) =>
          act.id === state.activeId ? action.payload.newActivity : act
        );
      } else {
        updateActivities = [...state.activities, action.payload.newActivity];
      }
      return {
        ...state,
        activities: updateActivities,
        activeId: "",
      };
    case "set-activeId":
      return {
        ...state,
        activeId: action.payload.id,
      };
    case "delete-activity":
      return {
        ...state,
        activities: state.activities.filter(
          (act) => act.id !== action.payload.id
        ),
      };

    default:
      return {
        ...state,
      };
  }
};
