import * as ActionTypes from '../constant/actions'

export const playlistInitialState = {
    playlistproducts: [],
    playlistCount: 0,
    currentselectedVideo: undefined,
    videoCountinSinglePlayList: 0,
}

const PlaylistListReducer = (state = playlistInitialState, action) => {
    switch (action.type) {
        case ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS:
            return {
                ...state,
                playlistproducts: action.payload,
                playlistCount: action.payload?.length
            }

        case ActionTypes?.playlistmanagment?.SET_CURRENT_VIDEO:
            return {
                ...state,
                currentselectedVideo: action.payload
            }

        case ActionTypes?.playlistmanagment?.UNSET_CURRENT_VIDEO: 
            return {
                ...state,
                currentselectedVideo: undefined
            }
    
        default:
            return{
                state
            }  
    }
}

export { PlaylistListReducer }
