import * as playlistApis from '../api/playlist'
import * as ActionTypes from '../constant/actions'
import { usePlayList } from '../context/playListContext'
import { useToast } from './useToastify';

export function usePlaylistOperation() {
    const { playList, dispatchplayList } = usePlayList();
    const { showToast } = useToast();

    async function getGlobalPlayLists(callback) {
        const response = await playlistApis?.getPlayList();
        dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: response?.data?.playlists
        });
        if (callback) {
            return callback();
        }
    }

    async function createPlayList(data, callback) {
        const response = await playlistApis?.postPlayList(data);
        if (response) {
            showToast("success", "creating new playlists")
            dispatchplayList({
                type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
                payload: response?.data?.playlists
            })
        }
        if (callback) {
            return callback();
        }
    }

    async function deletePlaylist(data, callback) {
        const response = await playlistApis?.deleteplayList(data);
        if (response) {
            showToast("info", "removing playlist")
            dispatchplayList({
                type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
                payload: response?.data?.playlists
            })
        }
        if (callback) {
            return callback();
        }
    }

    async function getSinglePlaylist(data, callback) {
        const response = await playlistApis?.getSingleplayList(data);
        if (callback) {
            return callback()
        }
        return response;
    }

    async function postVideotoplaylist(data, callback) {
        const response = await playlistApis?.postSingleplayList(data?.playlistId, data?.video);

        if (response) {
            showToast("success", "posting video to playlist")
        }

        const newPlaylists = playList?.playlistproducts?.reduce(
            (acc, curr) =>
                curr._id === response?.data?.playlist._id
                    ? [...acc, response?.data?.playlist]
                    : [...acc, curr],
            []
        );

        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: newPlaylists
        })
        if (callback) {
            return callback()
        }
    }

    async function deletevideoFromplaylist(data, callback) {
        const response = await playlistApis?.deleteSingleplayList(data?.playlistId, data?.videoId)

        if (response) {
            showToast("info", "removing video from playlist")
        }

        const newPlaylists = playList?.playlistproducts?.reduce(
            (acc, curr) =>
                curr._id === response?.data?.playlist._id
                    ? [...acc, response?.data?.playlist]
                    : [...acc, curr],
            []
        );
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: newPlaylists
        })
        if (callback) {
            return callback();
        }
    }

    return {
        getGlobalPlayLists,
        createPlayList,
        deletePlaylist,
        getSinglePlaylist,
        postVideotoplaylist,
        deletevideoFromplaylist
    }
}