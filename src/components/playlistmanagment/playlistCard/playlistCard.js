import React from 'react'
import './playlistcard.css'
import { usePlayList } from '../../../context/playListContext'
import * as ActionTypes from '../../../constant/actions'
import * as playListApis from '../../../api/playlist'
import { Link } from 'react-router-dom'

function PlaylistCard() {
    const { playList, dispatchplayList } = usePlayList()

    const removeGplaylist=async(playlistId)=>{
        const repsonse = await playListApis?.deleteplayList(playlistId);
        await dispatchplayList({
            type:ActionTypes?.playlistmanagment?.REMOVE_PLAYLIST_FROM_GLOBAL,
            payload:playlistId
        })

        await dispatchplayList({
            type:ActionTypes?.playlistmanagment?.CREATE_GLOBAL_PLAYLISTS,
            payload:repsonse?.data?.playlists
        })
    }

    return (
        <div className='main-p-section'>
            {playList?.playlistproducts && playList?.playlistproducts?.map((item, idx) => (
                <div key={`p-list${idx}`} className='p-card-container'>
                    <div className='p-parts'>
                        <div className='p-part-1'>
                            <Link to={`/playlists/${item?._id}`} className='playlist-name'>{item?.title}</Link>
                            <p className='content-count'>{`(${playList?.playlistproducts?.videos?.length ? playList?.playlistproducts?.videos?.length : 0}) videos`}</p>
                        </div>
                        <div className='p-part-2'>
                            <i onClick={()=>removeGplaylist(item?._id)} className="fa-solid fa-trash-slash">delete</i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlaylistCard
