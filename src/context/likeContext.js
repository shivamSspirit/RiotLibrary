
import React, { createContext, useContext, useReducer } from "react";
import * as LikesListReducer from '../reducers/likereducers'

export const LikesContext = createContext('LikesContext');

export const LikesProvider = ({ children }) => {
  const [Likes, dispatchLikes] = useReducer(LikesListReducer?.LikesListReducer,LikesListReducer?.likesInitialState);

  let contextValue = {
    Likes,
    dispatchLikes
  }

  return (
    <LikesContext.Provider value={contextValue}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);