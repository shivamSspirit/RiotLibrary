import React, { useEffect } from 'react'
import './sensitara.css'
import likeIcon from '../../asset/icon/like.png'
import Dislike from '../../asset/icon/dislike.png'
import Heart from '../../asset/icon/heart.png'
import playList from '../../asset/icon/playList.png'

function SenSitara(props) {
    const { fetchOne } = props;
    console.log('fetchOne',fetchOne)

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

    return (
        <div>
            <div className='section-container'>
                <div className='part-0'>
                    <h1 className='video-title'>{fetchOne?.title}</h1>
                </div>
                <div className='part-1'>
                    <p className='somepara'>{fetchOne?.category}</p>
                </div>
                <div className='part-2'>
                    <iframe width="950" height="534" src={`https://www.youtube.com/embed/${fetchOne && fetchOne?._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='part-3'>
                    <div className='play-feature'>
                        <div className='iconss'>
                            <div className='like-icon'>
                                <img className='img-style' src={likeIcon} alt='' />
                                <span>like</span>
                            </div>
                            <div className='dislike-icon'>
                                <img className='img-style' src={Dislike} alt='' />
                                <span>dislike</span>
                            </div>
                            <div className='heart-icon'>
                                <img className='img-style' src={Heart} alt='' />
                                <span>add to watch later</span>
                            </div>
                            <div className='playlist-icon'>
                                <img className='img-style' src={playList} alt='' />
                                <span>add to playList</span>
                            </div>
                            <div className='end-flex'>
                                <span>10K views</span>
                                <span>time duration</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='part-4'>
                    <h3 className='des'>Description</h3>
                </div>
                <div className='part-5'>
                    <p className='des-val'>
                        {fetchOne && `${fetchOne?.description}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SenSitara
