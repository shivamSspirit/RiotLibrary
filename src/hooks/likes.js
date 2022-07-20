import * as likesApis from '../api/likes'
import * as ActionTypes from '../constant/actions'
import { useLikes } from '../context/likeContext'

export function useLikesOperation() {
    const {Likes, dispatchLikes } = useLikes();

    function ifvideoinlikes(video){
        const isvideo = Likes?.likesproducts?.find((videos=>videos?._id===video?._id))
        if(isvideo){
            return true;
        }else{
            return false;
        }
    }

    async function getlikesvideoList(callback){
        const response = await likesApis?.getLikedList();
        console.log('res from get likes',response)
        await dispatchLikes({
            type:ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
        if(callback){
            return callback();
        }
    }

    async function postTolikes(video, callback) {
        if(ifvideoinlikes(video)){
            await dispatchLikes({
                type: ActionTypes?.likeAction?.ADD_TO_LIKES,
                payload: Likes?.likesproducts
            })
        }
        const response = await likesApis?.postLikedVideo(video);
        console.log('res from post likes',response)
        await dispatchLikes({
            type: ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
        
        if (callback) {
            return callback();
        }
    }

    async function removeFromlikes(videoId, callback) {
        const response = await likesApis?.deleteLikedVideo(videoId);
        console.log('res from remove likes',response)
        dispatchLikes({
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