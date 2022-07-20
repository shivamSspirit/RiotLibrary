import * as watchlaterApis from '../api/watchlater'
import * as ActionTypes from '../constant/actions'
import { useWatchLater } from '../context/watchLaterContext'

export function useWatchLaterOperation() {
    const { dispatchWatchlater,watchLater } = useWatchLater();

    function ifvideoinwatchlater(video){
        const isvideo =  watchLater?.watchLaterproducts?.find((videos=>videos?._id===video?._id))
        if(isvideo){
            return true;
        }else{
            return false;
        }    
    }

    async function getwatchLatervideoList(callback){
        const response = await watchlaterApis?.getwatchLater();
        console.log('res from get watchlater',response)
        await dispatchWatchlater({
            type:ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
            payload: response?.data?.watchlater
        })
        if(callback){
            return callback();
        }
    }

    async function postToWatchLater(video, callback) {
        if(ifvideoinwatchlater(video)){
            await dispatchWatchlater({
                type: ActionTypes?.WatchLaterAction.ADD_TO_WATCHLATER,
                payload: watchLater?.watchLaterproducts
            })
        }
        const response = await watchlaterApis?.postwatchVideo(video);
        console.log('resfrom post watchlater action',response)
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
        console.log('res from remove watchlater',response)
        dispatchWatchlater({
            type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
            payload: response?.data?.watchlater
        })
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