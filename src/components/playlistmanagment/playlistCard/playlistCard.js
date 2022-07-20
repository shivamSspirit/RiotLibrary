import React from 'react'
import './playlistcard.css'
import { usePlayList } from '../../../context/playListContext'
import * as ActionTypes from '../../../constant/actions'
import * as playListApis from '../../../api/playlist'
import { Link } from 'react-router-dom'

import {usePlaylistOperation} from '../../../hooks/playlistmanagment'

function PlaylistCard() {
    const { playList, dispatchplayList } = usePlayList()
    const {deletePlaylist}  =usePlaylistOperation()
    console.log('sssss',playList)



    const removeGplaylist=(playlistId)=>{
        deletePlaylist(playlistId)
     }

    return (
        <div className='main-p-section'>
            {playList?.playlistproducts && playList?.playlistproducts?.map((item, idx) => (
                <div key={`p-list${idx}`} className='p-card-container'>
                    <div className='p-parts'>
                        <div className='p-part-1'>
                            <Link to={`/playlists/${item?._id}`} className='playlist-name'>{item?.title}</Link>
                            <p className='content-count'>{`(${item.videos?.length ? item?.videos?.length : 0}) videos`}</p>
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
