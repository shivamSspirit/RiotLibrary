import * as WatchLaterApis from '../api/watchlater';
import * as ActionTypes from '../constant/actions';


export function getwatchLatervideoList(data, callback) {
    return async (dispatch) => {
        const response = await WatchLaterApis?.getwatchLater();
        dispatch(setwatchLatervideoList(response.data.watchlater));
        if (callback) {
            return callback();
        }
    };
}

export function postToWatchLater(data, callback) {
    return async (dispatch) => {
        const response = await WatchLaterApis?.postwatchVideo(data);
        dispatch(setwatchLatervideoList(response.data.watchlater));
        if (callback) {
            return callback();
        }
    }
}

export function removeFromWatchLater(data, callback) {
    return async (dispatch) => {
        const response = await WatchLaterApis?.deletewatchVideo(data);
        dispatch(removeVideoFromWatchLater(data));
        dispatch(setwatchLatervideoList(response.data.watchlater));
        if (callback) {
            return callback();
        }
    }
}

export function setwatchLatervideoList(watchlaterlist) {
    return {
        type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
        watchlaterlist
    };
}

export function removeVideoFromWatchLater(videoId) {
    return {
        type: ActionTypes?.WatchLaterAction?.REMOVE_FROM_WATCHLATER,
        videoId
    }
}

