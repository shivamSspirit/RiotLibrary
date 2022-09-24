import React from 'react'
import './singlevideoss.css'
import ReactPlayer from 'react-player'
import likeIcon from '../../asset/icon/like.png'
import Dislike from '../../asset/icon/dislike.png'
import playList from '../../asset/icon/playList.png'
import watchlaterLightIcon from '../../asset/icon/light.png'
import watchlaterDarkIcon from '../../asset/icon/dark.png'
import { useLikesOperation } from '../../hooks/likes'
import { useWatchLaterOperation } from '../../hooks/watchlater'
import { useLikes } from '../../context/likeContext'
import * as ActionTypes from '../../constant/actions'
import { useWatchLater } from '../../context/watchLaterContext'
import { usePlayList } from '../../context/playListContext'
import { useHistoryOperation } from '../../hooks/history'


function SingleVideos(props) {
    const { fetchOne, setModalOpen } = props;
    const { dispatchplayList } = usePlayList()
    const {watchLater} = useWatchLater()
    const {postTohistory} = useHistoryOperation();
    const { postToWatchLater, removeFromWatchLater } = useWatchLaterOperation();
    const {  postTolikes, removeFromlikes } = useLikesOperation();
    const { Likes } = useLikes()

    const modalOpration = async (currentvideo) => {
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.SET_CURRENT_VIDEO,
            payload: currentvideo
        })
        await setModalOpen(true);
    }


    const moveToWatchLater = async (video) => {
        await postToWatchLater(video, () => {
            console.log('posting ton watch later')
        })
    }


    const unsetfromwatchlater = async (videoId) => {
        await removeFromWatchLater(videoId, () => {
            console.log('removniig ')
        })
    }


    const addtoLikes = async (newItem) => {
        await postTolikes(newItem);
    }

    const removeFromLikes = async (videoId) => {
        await removeFromlikes(videoId)
    }

    const gotoHistory = (video) => {
        postTohistory(video,()=>{
            console.log('making history', video)
        })
    }

    return (
        <div>
            <div className='section-container'>
                <div className='part-2'>
                    <ReactPlayer width={'100%'} height={'450px'} onStart={() => gotoHistory(fetchOne)} controls url={`https://www.youtube.com/embed/${fetchOne?._id}`} />
                </div>

                <div className='part-3'>
                    <div className='play-feature'>
                        <div className='iconss'>
                            <div className='like-icon'>
                                {(Likes && Likes?.likesproducts?.find((videos) => videos?.id === fetchOne?.id)) ? <img onClick={() => { removeFromLikes(fetchOne?._id) }} className='img-style' src={likeIcon} alt='' /> : <img onClick={() => { addtoLikes(fetchOne) }} className='img-style' src={Dislike} alt='' />}
                                <span>like</span>
                            </div>
                            <div className='heart-icon'>
                            {(watchLater && watchLater?.watchLaterproducts?.find(video => video?.id === fetchOne?.id)) ? <img onClick={() => { unsetfromwatchlater(fetchOne?._id) }} style={{ maxWidth: '35px', maxHeight: '35px' }} className='img-style' src={watchlaterLightIcon} alt="dislike" /> : <img onClick={() => { moveToWatchLater(fetchOne) }} style={{ maxWidth: '35px', maxHeight: '35px' }} className='img-style' src={watchlaterDarkIcon} alt="like" />}
                                <span>add to watch later</span>
                            </div>
                            <div className='playlist-icon'>
                                <img className='img-style' onClick={() => modalOpration(fetchOne)} src={playList} alt='' />
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
