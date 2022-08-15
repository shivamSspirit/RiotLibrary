
import React, { createContext, useContext, useReducer } from "react";

import { PlaylistListReducer, playlistInitialState } from "../reducers/playlistmanagment";

export const PlayListContext = createContext('playListContext');

export const PlayListProvider = ({ children }) => {
  const [playList, dispatchplayList] = useReducer(PlaylistListReducer, playlistInitialState);

  let contextValue = {
    playList,
    dispatchplayList
  }

  return (
    <PlayListContext.Provider value={contextValue}>
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlayList = () => useContext(PlayListContext);