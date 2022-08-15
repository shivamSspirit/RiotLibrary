import * as watchlaterApis from '../api/watchlater'
import * as ActionTypes from '../constant/actions'
import { useWatchLater } from '../context/watchLaterContext'
import { useToast } from './useToastify';


export function useWatchLaterOperation() {
    const { dispatchWatchlater, watchLater } = useWatchLater();
    const { showToast } = useToast()

    function ifvideoinwatchlater(video) {
        const isvideo = watchLater?.watchLaterproducts?.find((videos => videos?._id === video?._id))
        if (isvideo) {
            return true;
        } else {
            return false;
        }
    }

    async function getwatchLatervideoList(callback) {
        const response = await watchlaterApis?.getwatchLater();
        if (response) {
            showToast("success", "getting watch later videos")
            await dispatchWatchlater({
                type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
                payload: response?.data?.watchlater
            })
        }
        if (callback) {
            return callback();
        }
    }

    async function postToWatchLater(video, callback) {
        if (ifvideoinwatchlater(video)) {
            await dispatchWatchlater({
                type: ActionTypes?.WatchLaterAction.ADD_TO_WATCHLATER,
                payload: watchLater?.watchLaterproducts
            })
        }
        const response = await watchlaterApis?.postwatchVideo(video);
        if (response) {
            showToast('success', 'added to watchlater')
            await dispatchWatchlater({
                type: ActionTypes?.WatchLaterAction.ADD_TO_WATCHLATER,
                payload: response?.data?.watchlater
            })
        }
        if (callback) {
            return callback();
        }
    }

    async function removeFromWatchLater(videoId, callback) {
        const response = await watchlaterApis?.deletewatchVideo(videoId);
        if (response) {
            showToast('info', 'removing from watchlater')
            dispatchWatchlater({
                type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
                payload: response?.data?.watchlater
            })
        }
        if (callback) {
            return callback();
        }
    }

    return {
        getwatchLatervideoList,
        postToWatchLater,
        removeFromWatchLater
    }

}