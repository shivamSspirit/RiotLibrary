import * as likesApis from '../api/likes'
import * as ActionTypes from '../constant/actions'
import { uselikes } from '../context/likeContext'

export function uselikesOperation() {
    const { dispatchlikes } = uselikes();

    async function getlikesvideoList(callback){
        const response = await likesApis?.getLikedList();
        await dispatchlikes({
            type:ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
        if(callback){
            return callback();
        }
    }

    async function postTolikes(video, callback) {
        const response = await likesApis?.postLikedVideo(video);
        await dispatchlikes({
            type: ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
        if (callback) {
            return callback();
        }
    }

    async function removeFromlikes(videoId, callback) {
        const response = await likesApis?.deleteLikedVideo(videoId);
        dispatchlikes({
            type: ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
        if (callback) {
            return callback();
        }
    }

    return {
        getlikesvideoList,
        postTolikes,
        removeFromlikes
    }

}