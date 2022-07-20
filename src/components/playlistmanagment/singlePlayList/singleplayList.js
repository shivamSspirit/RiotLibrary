import React, { useEffect, useState } from 'react'
import './singleplaylist.css'
 import OneCard from '../../cards/oneCard/oneCard'
import { useParams } from 'react-router-dom'
import * as PlayLaistApis from '../../../api/playlist'
import { usePlaylistOperation } from '../../../hooks/playlistmanagment'
import { usePlayList } from '../../../context/playListContext'

function SinglePlayListComp() {

    const { playlistId } = useParams();
    const [currentPLayList,setCurretnPlayList] = useState(null)
    const {getSinglePlaylist}  = usePlaylistOperation()
    const {playList} = usePlayList()



    useEffect(() => {
        if(playlistId){
           getSinglePlaylist(playlistId,()=>{
            console.log('getting single playlist')
           })
        }
    }, [playlistId])

    useEffect(()=>{
        if(playList?.playlistproducts){
            const findplaylist = playList?.playlistproducts?.find(lists=>lists?._id===playlistId)
            if(findplaylist){
                setCurretnPlayList(findplaylist)
            }
        }
    },[playList?.playlistproducts])

   

    return (
        <div className='mainplaylistSectionm'>
             <div className='hero-play-part'>
                <h2 className='play-title'>My playlist({`${currentPLayList?.videos?.length}`})</h2>
            </div>
         <OneCard isSinglePLayList={true} singlePlaylistVideoData={currentPLayList?.videos} /> 
        </div>
    )
}

export default SinglePlayListComp
