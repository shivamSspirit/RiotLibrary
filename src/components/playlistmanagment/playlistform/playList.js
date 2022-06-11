import React, { useState, useEffect } from 'react'
import './playlist.css'
import * as playListApis from '../../../api/playlist';
import * as watchlaterApis from '../../../api/watchlater'
import { usePlayList } from '../../../context/playListContext';
import { useWatchLater } from '../../../context/watchLaterContext';
import * as ActionTypes from '../../../constant/actions'
import * as playListAPis from '../../../api/playlist'



function Listform({ openModal }) {
    const [list, setList] = useState({
        title: "foo", description: "bar bar bar"
    });
    const [lists, setDataLists] = useState([]);
    const [toggleform, setToggleform] = useState(false)

    // getting playlist from server
    const [getplaylist, setGetPlayList] = useState(null)
    // fetching global playlist state from hooks

    const { playList, dispatchplayList } = usePlayList();

    // handling adding video to playlist

    const [checks, setChecks] = useState(false)

    const { watchLater, dispatchWatchlater } = useWatchLater();

    const [ifinwatchlater, setIfinwatchlater] = useState(false)


    useEffect(() => {
        getGlobalPlayList()
    }, [playList?.playlistCount])

    // useEffect(() => {
    //     console.log('checkes whetetr add video to playlist or not', checks);
    //     console.log('playlist from modal', playList)
    // }, [lists?.length])

    useEffect(() => {
        if (playList?.currentselectedVideo) {
            const findifin = watchLater?.watchLaterproducts?.find(watchvideo => watchvideo?.id === playList?.currentselectedVideo)
            if (findifin) {
                setIfinwatchlater(!ifinwatchlater)
            }
        }
    }, [playList?.currentselectedVideo])

    const listOnchange = (e) => {
        const val = e.target.name;
        if (val === 'p-title') {
            setList({
                title: e.target.value
            })
        }
        if (val === 'p-des') {
            setList({
                ...list, description: e.target.value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const targetList = { ...list }
        const response = await playListApis?.postPlayList(targetList);
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: response?.playlists
        });


        setDataLists([...lists, targetList]);
        setTimeout(() => {
            setList({
                title: '',
                description: ''
            });
        }, 1000)
    }

    const openForm = () => {
        setToggleform(!toggleform)
    }

    // const closeModal = async() => {

    //     await dispatchplayList({
    //              type: ActionTypes?.playlistmanagment?.UNSET_CURRENT_VIDEO
    //     });

    //     setModal(false)
    // }

    const getGlobalPlayList = async () => {
        const response = await playListApis?.getPlayList();
        setGetPlayList(response?.data?.playlists);
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload: response?.data?.playlists
        })
    }


    // setting cuurent video to respected playlist

    const setvideoToplaylist = async (playListID) => {
        setChecks(!checks)
        if (playList?.currentselectedVideo) {
            const response = await playListAPis?.postSingleplayList(playListID, playList?.currentselectedVideo)
            console.log('aftersend video to respected playlist', response)
        }
        // await dispatchplayList({
        //     type: ActionTypes?.playlistmanagment?.UNSET_CURRENT_VIDEO
        // })
    }

    // removing specific video from respected playlist

    const removeVideoFromPlaylist = async (playlistID) => {
        setChecks(!checks)
        if (playList?.currentselectedVideo) {
            const response = await playListAPis?.deleteSingleplayList(playlistID, playList?.currentselectedVideo?._id)
            console.log(response)
        }
    }

    // adding to watxh later

    const addingToWatchlater = async () => {
        if (playList?.currentselectedVideo) {
            const response = await watchlaterApis?.postwatchVideo(playList?.currentselectedVideo)
            await dispatchWatchlater({
                type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
                payload: response?.data?.watchLater
            })
        }
    }

    // removing from watch later
    const removingFromWatchlater = async () => {

        if (playList?.currentselectedVideo) {
            const response = await watchlaterApis?.deletewatchVideo(playList?.currentselectedVideo?.id);

            await dispatchWatchlater({
                type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
                payload: response?.data?.watchLater
            })

            // await dispatchplayList({
            //     type: ActionTypes?.playlistmanagment?.UNSET_CURRENT_VIDEO
            // })
        }
    }

    return (
        <div>
            {openModal && (
                <div className='play-list-form'>

                    <h2 onClick={openForm} className='form-title'>
                        create new playlist
                    </h2>
                    {toggleform && (
                        <form onSubmit={handleSubmit} className='form-container'>
                            <label className='in-label' htmlFor='play-list-title'>
                                PlayList Title:
                            </label>
                            <input className='list-input' value={list?.title} type='text' placeholder='play list title' name='p-title' onChange={listOnchange} />

                            <label className='in-label' htmlFor='play-list-des'>
                                PlayList Des:
                            </label>
                            <input className='list-input' value={list.description} type='text' placeholder='play list description' name='p-des' onChange={listOnchange} />

                            <div className='form-btn'>
                                <button className='btnn' type='submit'>create</button>
                            </div>
                        </form>
                    )}

                    <div className='playlists'>
                        <p>save to...</p>
                        <div className='chec-doc'>
                            <input onChange={ifinwatchlater ? removingFromWatchlater : addingToWatchlater} value={ifinwatchlater} type="checkbox" id={`${'watch'}`} name={`${'watch'}`} />
                            <label className='lab-check' for={`${'watch'}`}>{`${'watch later'}`}</label>
                        </div>
                        {getplaylist && getplaylist?.map((list, idx) => (
                            <div className='chec-doc' key={`playlist${idx}`}>
                                <input onChange={() => checks ? removeVideoFromPlaylist(list?._id) : setvideoToplaylist(list?._id)} type="checkbox" id={`${list.title}`} name={`${list.title}`} />
                                <label className='lab-check' htmlFor={`${list.title}`}>{`${list.title}`}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Listform
