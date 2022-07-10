import * as playlistApis from '../api/playlist'
import * as ActionTypes from '../constant/actions'
import { usePlayList } from '../context/playListContext'


export function usePlaylistOperation() {
    const { playList, dispatchplayList } = usePlayList();

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
        dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: response?.data?.playlists
        })
        if (callback) {
            return callback();
        }
    }

    async function deletePlaylist(data, callback) {
        const response = await playlistApis?.deleteplayList(data);
        dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: response?.data?.playlists
        })
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
        const updatedPlaylist = playList?.playlistproducts?.reduce((acc, cuur) =>
            cuur?._id === response?.data?.playlist?._id ? [...acc, response?.data?.playlist] : [...acc, cuur]
        )

        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: updatedPlaylist
        })
        if (callback) {
            return callback()
        }
    }

    async function deletevideoFromplaylist(data, callback) {
        const response = await playlistApis?.deleteSingleplayList(data?.playlistId, data?.videoId)

        const updatedPlaylist = playList?.playlistproducts?.reduce(
            (acc, curr) =>
                curr._id === response?.playlist?._id
                    ? [...acc, response?.playlist]
                    : [...acc, curr],
            []
        );

        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: updatedPlaylist
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