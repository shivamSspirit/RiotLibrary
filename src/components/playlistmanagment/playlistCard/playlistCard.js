import React from 'react'
import { Link } from 'react-router-dom'

import './playlistcard.css'
import { usePlayList } from '../../../context/playListContext'
import {usePlaylistOperation} from '../../../hooks/playlistmanagment'
import demoImg from '../../../asset/img/hawamahal.jpeg'

function PlaylistCard() {
    const { playList } = usePlayList()
    const {deletePlaylist}  =usePlaylistOperation()

    const removeGplaylist=(playlistId)=>{
        deletePlaylist(playlistId)
     }

    return (
        <div className='main-p-section'>
            {playList?.playlistproducts && playList?.playlistproducts?.map((item, idx) => (
                <div key={`p-list${idx}`} className='p-card-container'>
                    <div className='p-parts'>
                        <div className='img-part'>
                            <img src={demoImg} alt='img' className='playlist-img'/> 
                        </div>
                        <div className='p-part-1'>
                            <Link to={`/playlists/${item?._id}`} className='playlist-name'>{item?.title}</Link>
                            <p className='content-count'>{`(${item.videos?.length ? item?.videos?.length : 0}) videos`}</p>
                        </div>
                        <div className='p-part-2'>
                            <button className='dlt-btn' onClick={()=>removeGplaylist(item?._id)}>delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlaylistCard
