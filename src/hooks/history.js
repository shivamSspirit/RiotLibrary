import * as historyApis from '../api/history'
import * as ActionTypes from '../constant/actions'
import { useHistory } from '../context/historyContext'

export function usehistoryOperation() {
    const { dispatchHistory } = useHistory();

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

    async function postTohistory(video, callback) {
        const response = await historyApis?.postHistory(video);
        await dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
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

    async function removeAllHistory(callback){
        const response = await historyApis?.deleteHistoryVideos();
        dispatchHistory({
            type:ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload:response?.data?.history
        })
        if(callback){
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