import React, { useState, useEffect } from 'react'
import './playlist.css'
import * as playListApis from '../../../api/playlist';
import { usePlayList } from '../../../context/playListContext';
import { useWatchLater } from '../../../context/watchLaterContext';
import * as ActionTypes from '../../../constant/actions'

import { useWatchLaterOperation } from '../../../hooks/watchlater';
import { usePlaylistOperation } from '../../../hooks/playlistmanagment';

import Cross from '../../../asset/img/cross.png'


function Listform({ openModal, setModal }) {
    const [list, setList] = useState({
        title: "games", description: "bob bar bar"
    });
    const [lists, setDataLists] = useState([]);
    const [toggleform, setToggleform] = useState(false)

    // getting playlist from server
    const [getplaylist, setGetPlayList] = useState(null)

    // fetching global playlist state from hooks
    const { playList, dispatchplayList } = usePlayList();
    const { getGlobalPlayLists,
        postVideotoplaylist,
        deletevideoFromplaylist } = usePlaylistOperation();

    const { watchLater } = useWatchLater()
    const { postToWatchLater, removeFromWatchLater } = useWatchLaterOperation()


    useEffect(() => {
        getGlobalPlayLists(() => {
            console.log('setting playlist')
        })
    }, [playList?.playlistCount])


    useEffect(() => {
        if (playList.playlistproducts) {
            setGetPlayList(playList.playlistproducts);
        }
    }, [playList.playlistproducts])

    // forminput list  handler

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

    // dispatching new play list

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

    
    // plylist operations

    const isVideoInPlaylist = async (playlist) => {
        const filteredVideos = playlist.videos.filter(
            (playlistVideo) => playlistVideo._id === playList?.currentselectedVideo?._id
        );
        return filteredVideos.length === 1;
    };


    const handlevideoInplaylist = async (playlist) => {
        isVideoInPlaylist(playlist) ? deletevideoFromplaylist({ playlistId: playlist?._id, videoId: playList?.currentselectedVideo?._id }) : postVideotoplaylist({ playlistId: playlist?._id, video: playList?.currentselectedVideo })
    }

    
    // watch later oparation

    const setwatchlater = async () => {
        if (playList?.currentselectedVideo) {
            await postToWatchLater(playList?.currentselectedVideo)
        }
        console.log('setted in watchlater')
    }

    const unsetfromwatchlater = async () => {
        if (playList?.currentselectedVideo) {
            await removeFromWatchLater(playList?.currentselectedVideo?._id)
        }
        console.log('unsetted in watchlater')
    }


    // close modal and unsetting current video

    const closeModal = async () => {
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.UNSET_CURRENT_VIDEO
        });

        setModal(false)
    }

    return (
        <div>
            {openModal && (
                <div className='play-list-form'>
                    <div className='card-head'>
                        <h2 onClick={openForm} className='form-title'>
                            create new playlist
                        </h2>
                        <span className='cross-icon'>
                            <img onClick={closeModal} src={Cross} className='cross' alt='close' />
                        </span>
                    </div>

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
                            <input onChange={watchLater?.watchLaterproducts?.find(video => video?.id === playList?.currentselectedVideo?.id) ? unsetfromwatchlater : setwatchlater} checked={watchLater?.watchLaterproducts?.find(video => video?.id === playList?.currentselectedVideo?.id)} type="checkbox" id={`${'watch'}`} name={`${'watch'}`} />
                            <label className='lab-check' for={`${'watch'}`}>{`${'watch later'}`}</label>
                        </div>
                        {getplaylist.length && getplaylist?.map((list, idx) => (
                            <div className='chec-doc' key={`playlist${idx}`}>
                                <input onChange={() => handlevideoInplaylist(list)} type="checkbox" id={`${list.title}`} name={`${list.title}`} />
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
