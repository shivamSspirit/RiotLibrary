import * as likesApis from '../api/likes'
import * as ActionTypes from '../constant/actions'
import { useLikes } from '../context/likeContext'

import { useToast } from './useToastify';

export function useLikesOperation() {
     const { showToast } = useToast()
    const { Likes, dispatchLikes } = useLikes();


    function ifvideoinlikes(video) {
        const isvideo = Likes?.likesproducts?.find((videos => videos?._id === video?._id))
        if (isvideo) {
            return true;
        } else {
            return false;
        }
    }

    async function getlikesvideoList(callback) {
        const response = await likesApis?.getLikedList();
        await dispatchLikes({
            type: ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
        if (callback) {
            return callback();
        }
    }

    async function postTolikes(video, callback) {
        if (ifvideoinlikes(video)) {
            await dispatchLikes({
                type: ActionTypes?.likeAction?.ADD_TO_LIKES,
                payload: Likes?.likesproducts
            })
        }
        const response = await likesApis?.postLikedVideo(video);
        if (response) {
            showToast('success', 'added to Likes')
            await dispatchLikes({
                type: ActionTypes?.likeAction?.ADD_TO_LIKES,
                payload: response?.data?.likes
            })
        }
        if (callback) {
            return callback();
        }
    }

    async function removeFromlikes(videoId, callback) {
        const response = await likesApis?.deleteLikedVideo(videoId);
        if (response) {
            showToast('info','removing from Likes')
            dispatchLikes({
                type: ActionTypes?.likeAction?.ADD_TO_LIKES,
                payload: response?.data?.likes
            })
        }
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