import * as historyApis from '../api/history'
import * as ActionTypes from '../constant/actions'
import { useHistory } from '../context/historyContext'


export function useHistoryOperation() {
    const { history, dispatchHistory } = useHistory();

    function ifvideoinhistory(video) {
        const isvideo = history?.historyproducts?.find((videos => videos?._id === video?._id))
        if (isvideo) {
            return true;
        } else {
            return false;
        }
    }

    async function gethistoryvideoList(callback) {
        const response = await historyApis?.getHistoryList();
        await dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
        if (callback) {
            return callback();
        }
    }

    async function postTohistory(historyVideo, callback) {
        if (ifvideoinhistory(historyVideo)) {
            await dispatchHistory({
                type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
                payload: history?.historyvideos
            })
        }
        const response = await historyApis?.postHistory(historyVideo);
        if(response){
           
            await dispatchHistory({
                type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
                payload: response?.data?.history
            })  
        }
        if (callback) {
            return callback();
        }
    }

    async function removeFromhistory(videoId, callback) {
        const response = await historyApis?.deleteHistoryVideo(videoId);
        dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
        if (callback) {
            return callback();
        }
    }

    async function removeAllHistory(callback) {
        const response = await historyApis?.deleteHistoryVideos();
        dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
        if (callback) {
            return callback()
        }
    }

    return {
        gethistoryvideoList,
        postTohistory,
        removeFromhistory,
        removeAllHistory
    }

}