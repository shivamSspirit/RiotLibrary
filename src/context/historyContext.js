import React, { createContext, useContext, useReducer } from "react";
import { HistoryListReducer,historyInitialState} from '../reducers/history'

export const HistoryContext = createContext('historyContext');

export const HistoryProvider = ({ children }) => {
  const [history,dispatchHistory] = useReducer(HistoryListReducer,historyInitialState);

  let contextValue = {
    history,
    dispatchHistory
  }

  return (
    <HistoryContext.Provider value={contextValue}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);