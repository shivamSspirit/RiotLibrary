import * as watchlaterApis from '../api/watchlater'
import * as ActionTypes from '../constant/actions'
import { useWatchLater } from '../context/watchLaterContext'

export function useWatchLaterOperation() {
    const { dispatchWatchlater } = useWatchLater();

    // function getwatchLatervideoList(data, callback) {
    //     return async (dispatch) => {
    //         const response = await WatchLaterApis?.getwatchLater();
    //         dispatch(setwatchLatervideoList(response.data.watchlater));
    //         if (callback) {
    //             return callback();
    //         }
    //     };
    // }

    async function postToWatchLater(video, callback) {
        const response = await watchlaterApis?.postwatchVideo(video);
        await dispatchWatchlater({
            type: ActionTypes?.WatchLaterAction.ADD_TO_WATCHLATER,
            payload: response?.data?.watchlater
        })
        if (callback) {
            return callback();
        }
    }

    async function removeFromWatchLater(videoId, callback) {
        const response = await watchlaterApis?.deletewatchVideo(videoId);
        dispatchWatchlater({
            type: ActionTypes?.WatchLaterAction?.REMOVE_FROM_WATCHLATER,
            payload: videoId
        })
        dispatchWatchlater({
            type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
            payload: response?.data?.watchlater
        })
        if (callback) {
            return callback();
        }
    }

    return {
        postToWatchLater,
        removeFromWatchLater
    }

}