
import React, { createContext, useContext, useReducer } from "react";
import * as watchLaterListReducer from '../reducers/watchLater'

export const WatchLaterContext = createContext('watchlaterContext');

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, dispatchWatchlater] = useReducer(watchLaterListReducer?.watchLaterListReducer,watchLaterListReducer?.watchLaterInitialState);

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