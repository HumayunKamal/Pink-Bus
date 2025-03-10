import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import { ActionType, City, Timing } from "~/constantData";

// AppState interface and initial State
interface AppState {
  isDarkMode: boolean;
  timing: Timing;
  from: City;
  to: City;
  date: Date;
  email: string;
  error: null | string;
}
const initialState: AppState = {
  isDarkMode: false,
  timing: Timing.Morning,
  from: City.Chakwal,
  to: City.Faizabad,
  date: new Date(),
  email: "",
  error: "",
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
  globalState: AppState;
  handleChange: (payload: PayloadType) => void;
}>({ globalState: initialState, handleChange: () => {} });

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Context provider
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, dispatch] = useReducer(appReducer, initialState);
  const handleChange = (payload: PayloadType) => {
    dispatch({ type: ActionType.HANDLE_CHANGE, payload });
  };

  /* /////////////////////// */
  /* Context DarkMode Logic */
  // useEffect(() => {
  //   handleChange({
  //     name: "isDarkMode",
  //     value:
  //       JSON.parse(localStorage.getItem("dark") as string) ||
  //       (!("dark" in localStorage) &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches),
  //   });
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("dark", JSON.stringify(globalState.isDarkMode));
  // }, [globalState.isDarkMode]);

  return (
    <AppContext value={{ globalState, handleChange }}>{children}</AppContext>
  );
};

export { AppProvider, useAppContext };
