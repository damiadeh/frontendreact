import React, { createContext, useReducer } from "react";
import { TableData } from "../interfaces/dtos";
import * as actions from "./actions";

type AppState = typeof initialState;
type Action = {
  type: typeof actions.SET_HIDDEN_TABLE_COLUMNS
  | typeof actions.SET_SELECTED_TABLE_DATA
  | typeof actions.SET_TABLE_DATA;
  payload: any
}

interface StoreProviderProps {
  children: React.ReactNode;
}

const defaultHiddenColumns = [0, 1, 2]
const initialState = {
  tableData: [],
  selectedData: null,
  hiddenColumns: defaultHiddenColumns
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case actions.SET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload,
      };
      case actions.SET_SELECTED_TABLE_DATA:
        return {
          ...state,
          selectedData: action.payload,
        };
        case actions.SET_HIDDEN_TABLE_COLUMNS:
          return {
            ...state,
            hiddenColumns: [...defaultHiddenColumns,...action.payload],
          };
    default:
      return state;
  }
};

const StoreContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => { } });

function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };