import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import { ActionType } from "~/constantData";

// AppState interface and initial value
interface AppState {
  error: string;
}

const initialState: AppState = {
  error: "",
};

// create and use context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// action with payload
interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: string;
}

interface SimpleAction {
  type: ActionType.CLEAR_ERROR;
}

// Union of all actions
type Action = SetErrorAction | SimpleAction;

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ActionType.SET_ERROR:
      return { ...state, error: action.payload };
    case ActionType.CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext value={{ state, dispatch }}>{children}</AppContext>;
};

export { AppProvider, useAppContext };
