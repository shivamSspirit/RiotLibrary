import * as PlaylistApis from '../api/playlist';
import * as ActionTypes from '../constant/actions';


export function getplayList(callback) {
    return async (dispatch) => {
        const response = await PlaylistApis?.getPlayList();
        await dispatch(setplayList(response.data.playlists));
        if (callback) {
            return callback();
        }
    };
}

export function postToPlaylists(data, callback) {
    return async (dispatch) => {
        const response = await PlaylistApis?.postPlayList(data);
        await dispatch(setplayList(response.data.playlists));
        if (callback) {
            return callback();
        }
    }
}

export function removeFromPlaylist(data, callback) {
    return async (dispatch) => {
        const response = await PlaylistApis?.deleteplayList(data);
        await dispatch(removePlaylist(data));
        await dispatch(setplayList(response.data.playlists));
        if (callback) {
            return callback();
        }
    }
}


export function getSinglePlayList(data,callback){
    return async(dispatch)=>{
        const response = await PlaylistApis?.getSingleplayList(data);
        console.log('res from get singleplaylist',response)
        if(callback){
            return callback();
        }
    }
}


export function postVideosToPlaylist(data,callback){
    return async(dispatch)=>{
        const response = await PlaylistApis?.postSingleplayList(data);
        console.log('response from post single video',response)
        if(callback){
            return callback();
        }
    }

}

export function deleteVideosfromPlayList(data,callback){
    return async(dispatch)=>{
        const response = await PlaylistApis?.deleteSingleplayList(data);
        console.log('response from delete videos from playlist',response)
    }
}


export function setplayList(playlists) {
    return {
        type: ActionTypes?.playlistmanagment.CREATE_GLOBAL_PLAYLISTS,
        playlists
    };
}

export function removePlaylist(playlistId) {
    return {
        type: ActionTypes?.playlistmanagment?.REMOVE_PLAYLIST_FROM_GLOBAL,
        playlistId
    }
}
