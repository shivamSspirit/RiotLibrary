
import React, { createContext, useContext, useReducer } from "react";
import * as WatchLaterRAeeducers from '../reducers/watchLater'

export const WatchLaterContext = createContext('watchlaterContext');

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, dispatchWatchlater] = useReducer(WatchLaterRAeeducers?.watchLaterListReducer,WatchLaterRAeeducers?.watchLaterInitialState);

  let contextValue = {
    watchLater,
    dispatchWatchlater
  }

  return (
    <WatchLaterContext.Provider value={contextValue}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);