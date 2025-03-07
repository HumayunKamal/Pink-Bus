import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import { ActionType, City, ThemeMode, Timing } from "~/constantData";

// AppState interface and initial State
interface AppState {
  theme: ThemeMode;
  timing: Timing;
  from: City;
  to: City;
  date: Date;
  email: string;
  error: null | string;
}
const initialState: AppState = {
  theme: ThemeMode.Light,
  timing: Timing.Morning,
  from: City.Chakwal,
  to: City.Faizabad,
  date: new Date(),
  email: "",
  error: null,
};

///////////////////////////////
// Actions and reducer
// Create a union type of all possible payload objects
type PayloadType = {
  [K in keyof AppState]: {
    name: K;
    value: AppState[K];
  };
}[keyof AppState];

interface ChangHandlerAction {
  type: ActionType.HANDLE_CHANGE;
  payload: PayloadType;
}

// Union of all actions
type Action = ChangHandlerAction;
const appReducer = (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
    case ActionType.HANDLE_CHANGE:
      return { ...state, [payload.name]: payload.value };

    default:
      return state;
  }
};

/////////////////////////
// Create and use context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
  handleChange: (payload: PayloadType) => void;
}>({ state: initialState, dispatch: () => null, handleChange: () => {} });

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Context provider
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const handleChange = (payload: PayloadType) => {
    dispatch({ type: ActionType.HANDLE_CHANGE, payload });
  };

  return (
    <AppContext value={{ state, dispatch, handleChange }}>
      {children}
    </AppContext>
  );
};

export { AppProvider, useAppContext };
