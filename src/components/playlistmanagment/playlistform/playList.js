import React, { useState, useEffect } from 'react'
import './playlist.css'

import { usePlayList } from '../../../context/playListContext';
import { useWatchLater } from '../../../context/watchLaterContext';
import { useWatchLaterOperation } from '../../../hooks/watchlater';
import { usePlaylistOperation } from '../../../hooks/playlistmanagment';

import * as ActionTypes from '../../../constant/actions'

import Cross from '../../../asset/img/cross.png'


function Listform(props) {
    const [list, setList] = useState({
        title: "games", description: "bob bar bar"
    });
    const [lists, setDataLists] = useState([]);
    const [toggleform, setToggleform] = useState(false)


    // fetching global playlist state from hooks
    const { playList, dispatchplayList } = usePlayList();
    const { getGlobalPlayLists, postVideotoplaylist, deletevideoFromplaylist, createPlayList } = usePlaylistOperation();

    const { watchLater } = useWatchLater()
    const { postToWatchLater, removeFromWatchLater } = useWatchLaterOperation()

    // forminput list  handler

    useEffect(() => {
        getGlobalPlayLists(() => {
            console.log('getting playlist')
        })
    }, [lists])

    const listOnchange = (e) => {
        const val = e.target.name;
        if (val === 'p-title') {
            setList({
                ...list, title: e.target.value,

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
        setDataLists([...lists, targetList]);
        await createPlayList(targetList, () => {
            console.log('creating new playlist')
        })
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

    const isVideoInPlaylist = (playlist) => {
        const filteredVideos = playlist?.videos?.filter(
            (playlistVideo) => playlistVideo._id === playList?.currentselectedVideo?._id
        );
        return filteredVideos?.length === 1;
    };


    const setVideoToPlayList = (playlist) => {
        const data = { playlistId: playlist?._id, video: playList?.currentselectedVideo }
        postVideotoplaylist(data, () => {
            console.log('posting')
        })
    }

    const unsetVideoFromPlayList = (playlist) => {
        const data = { playlistId: playlist?._id, videoId: playList?.currentselectedVideo?._id }
        deletevideoFromplaylist(data, () => {
            console.log('deleting')
        })
    }

    const handlevideoInplaylist = (e, playlist) => {
        e.preventDefault()
        isVideoInPlaylist(playlist) ? unsetVideoFromPlayList(playlist) : setVideoToPlayList(playlist)
    }


    // watch later oparation

    const setwatchlater = async () => {
        if (playList?.currentselectedVideo) {
            await postToWatchLater(playList?.currentselectedVideo)
        }
    }

    const unsetfromwatchlater = async () => {
        if (playList?.currentselectedVideo) {
            await removeFromWatchLater(playList?.currentselectedVideo?._id)
        }
    }


    // close modal and unsetting current video

    const closeModal = async () => {
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.UNSET_CURRENT_VIDEO
        });

        props.setModalOpen(false)
    }

    return (
        <div>
            {props.openmodal && (
                <div className='play-list-form'>
                    <div className='card-head'>
                        <h2 onClick={openForm} className='form-title'>
                            <button className='btn'>create new playlist</button>
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
                            <input className='list-input' value={list?.description} type='text' placeholder='play list description' name='p-des' onChange={listOnchange} />

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
                        {playList?.playlistproducts && playList?.playlistproducts?.map((list, idx) => (
                            <div className='chec-doc' key={`playlist${idx}`}>
                                {console.log('pro', list)}
                                <input checked={isVideoInPlaylist(list)} onChange={(e) => handlevideoInplaylist(e, list)} type="checkbox" id={`${list.title}`} name={`${list.title}`} />
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
