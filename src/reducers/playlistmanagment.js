export const playlistInitialState = {
    playlistproducts: [],
    playlistCount: 0,
    currentselectedVideo: undefined,
    videoCountinSinglePlayList: 0,
}

const PlaylistListReducer = (state = playlistInitialState, action) => {
    //  console.log(action)
    switch (action.type) {
        case "CREATE_GLOBAL_PLAYLISTS":
            return {
                ...state,
                playlistproducts: action.payload,
                playlistCount: action.payload?.length
            }

        case "REMOVE_PLAYLIST_FROM_GLOBAL":
            return {
                ...state,
                playlistproducts: state?.playlistproducts?.filter((r) => r?.id !== action.payload),
                playlistCount: state?.playlistproducts.length
            }


        case "SET_CURRENTVIDEO_TO_CURRENTPLAYLIST":
            return{
                ...state,

            }
            
        case "UNSET_SPECIFICVIDEO_FROM_SPECIFICPLAYLIST":
            return{
                ...state,
                
            }   

        case "SET_CURRENT_VIDEO":
            return {
                ...state,
                currentselectedVideo: action.payload
            }

        case "UNSET_CURRENT_VIDEO": {
            return {
                ...state,
                currentselectedVideo: undefined
            }
        }
    }
}

export { PlaylistListReducer }
