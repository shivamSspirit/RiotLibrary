import * as playlistApis from '../api/playlist'
import * as ActionTypes from '../constant/actions'
import { usePlayList } from '../context/playListContext'


export function usePlaylistOperation() {
    const { playList, dispatchplayList } = usePlayList();

    async function getGlobalPlayLists(callback) {
        const response = await playlistApis?.getPlayList();
        console.log('get all playlists',response)
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
        console.log('create new playlists',response)
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
        console.log('delete single playlists',response)
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
        console.log('get single playlists',response)
        if (callback) {
            return callback()
        }
        return response;
    }

    async function postVideotoplaylist(data, callback) {
        console.log('when posting',data)
        const response = await playlistApis?.postSingleplayList(data?.playlistId, data?.video);
        console.log('posting video to single playlist',response)

        // const updatedPlaylists = k

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
        console.log('when deleteing')
        const response = await playlistApis?.deleteSingleplayList(data?.playlistId, data?.videoId)
        console.log('deleting video to single playlist',response)

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