import React, { useEffect, useState } from 'react'
import './singleplaylist.css'
 import OneCard from '../../cards/oneCard/oneCard'
import { useParams } from 'react-router-dom'
import * as PlayLaistApis from '../../../api/playlist'


function SinglePlayListComp() {

    const { playlistId } = useParams();
    const [currentPLayList,setCurretnPlayList] = useState(null)


    useEffect(() => {
        if(playlistId){
            (async()=>{
                const response = await PlayLaistApis?.getSingleplayList(playlistId);
                setCurretnPlayList(response?.data?.playlist)
            })()
        }
    }, [playlistId])

   

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
