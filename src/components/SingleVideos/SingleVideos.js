import React from 'react'
import './singlevideoss.css'

import likeIcon from '../../asset/icon/like.png'
import Dislike from '../../asset/icon/dislike.png'
import playList from '../../asset/icon/playList.png'
import watchlaterLightIcon from '../../asset/icon/light.png'
import watchlaterDarkIcon from '../../asset/icon/dark.png'

import { useLikesOperation } from '../../hooks/likes'
import { usePlaylistOperation } from '../../hooks/playlistmanagment'
import { useWatchLaterOperation } from '../../hooks/watchlater'
import { useGlobal } from '../../context/GlobalContext'
import ReactPlayer from 'react-player'

function SingleVideos(props) {
    const { fetchOne } = props;
    console.log('fetchOne', fetchOne)

    // const moveToWatchLater = async (videoId) => {
    //     const selectedProduct = exploreVideoData?.find(item => item?._id === videoId)
    //     const res = await WatchLaterApi?.postwatchVideo(selectedProduct)
    //     await dispatchWatchlater({
    //         type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
    //         payload: res?.data?.watchlater
    //     })
    // }



    // const unsetfromwatchlater = async (videoId) => {
    //     const res = await WatchLaterApi?.deletewatchVideo(videoId)

    //     await dispatchWatchlater({
    //         type: ActionTypes?.WatchLaterAction?.REMOVE_FROM_WATCHLATER,
    //         payload: videoId
    //     })

    //     await dispatchWatchlater({
    //         type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
    //         payload: res?.data?.watchlater
    //     })
    // }

    const gotoHistory = (videoId) => {
        console.log('making history', videoId)
    }

    return (
        <div>
            <div className='section-container'>
                <div className='part-2'>
                        <ReactPlayer width={'100%'} height={'450px'} onStart={() => { gotoHistory(fetchOne?._id) }} controls url={`https://www.youtube.com/embed/${fetchOne?._id}`} />
                </div>
                <div className='part-3'>
                    <div className='play-feature'>
                        <div className='iconss'>
                            <div className='like-icon'>
                                <img className='img-style' src={likeIcon} alt='' />
                                <span>like</span>
                            </div>
                            <div className='heart-icon'>
                                <img className='img-style' src={watchlaterDarkIcon} alt='' />
                                <span>add to watch later</span>
                            </div>
                            <div className='playlist-icon'>
                                <img className='img-style' src={playList} alt='' />
                                <span>add to playList</span>
                            </div>
                            <div className='end-flex'>
                                <span>10K views</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='part-0'>
                    <h3 className='video-title'>{fetchOne?.title}</h3>
                </div>
                <div className='part-4'>
                    <h3 className='des'>Description</h3>
                    <p className='des-val'>
                        {fetchOne && `${fetchOne?.description}`}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default SingleVideos
