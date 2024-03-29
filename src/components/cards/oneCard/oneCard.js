import React from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useGlobal } from '../../../context/GlobalContext'
import { useWatchLater } from '../../../context/watchLaterContext'
import { usePlayList } from '../../../context/playListContext'
import { useLikes } from '../../../context/likeContext'

import * as CategoryPis from '../../../api/category'
import * as ActionTypes from '../../../constant/actions'

import { useLikesOperation } from '../../../hooks/likes'
import { useWatchLaterOperation } from '../../../hooks/watchlater'
import { usePlaylistOperation } from '../../../hooks/playlistmanagment'

import likesIcon from '../../../asset/icon/like.png'
import dislikeIcon from '../../../asset/icon/dislike.png'
import playlistIcon from '../../../asset/icon/playList.png'
import watchlaterLightIcon from '../../../asset/icon/light.png'
import watchlaterDarkIcon from '../../../asset/icon/dark.png'

import { ToastContainer } from 'react-toastify';




function OneCard(props) {
    const { isCategoryCard, CategoryCardData, isExploreVideoCard, exploreVideoData, isWatchLater, watchvideoLaterData, setModalOpen, isSinglePLayList, singlePlaylistVideoData, isCategorized, categorizedVideo, isLikesVideos, likesVideoData, isHistoryVideos, historyVideoData } = props;
    const { setCurrentCategory } = useGlobal();
    const navigate = useNavigate();
    const { playlistId } = useParams()
    const { watchLater } = useWatchLater();
    const { dispatchplayList } = usePlayList();
    const { Likes } = useLikes();
    const { postToWatchLater, removeFromWatchLater } = useWatchLaterOperation();
    const { postTolikes, removeFromlikes } = useLikesOperation();
    const { deletevideoFromplaylist } = usePlaylistOperation();


    const removevideoFromPlaylist = (video) => {
        const data = { playlistId: playlistId, videoId: video?._id }
        deletevideoFromplaylist(data)
    }

    const moveToExplore = async (videoCategoryID) => {
        const res = await CategoryPis?.getSingleCategory(videoCategoryID);
        await setCurrentCategory(res.data.category.categoryName);
        navigate('/videos')
    }


    // watchlater operations

    const moveToWatchLater = async (videoId) => {
        const selectedProduct = exploreVideoData?.find(item => item?._id === videoId)
        await postToWatchLater(selectedProduct, () => {
            console.log('posting ton watch later')
        })
    }

    const unsetfromwatchlater = async (videoId) => {
        await removeFromWatchLater(videoId, () => {
            console.log('removniig ')
        })
    }

    // for model
    const modalOpration = async (currentvideoID) => {
        const currentselectedVideo = exploreVideoData?.find(item => item?._id === currentvideoID)
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.SET_CURRENT_VIDEO,
            payload: currentselectedVideo
        })
        setModalOpen(true);
    }

    // for likes

    const addtoLikes = async (videoId) => {
        const newItem = exploreVideoData?.find(item => item?._id === videoId)
        await postTolikes(newItem);
    }

    const removeFromLikes = async (videoId) => {
        await removeFromlikes(videoId)
    }

    // for playlist

    return (
        <>
            {isCategoryCard && (
                <div className='card-section'>
                    {(CategoryCardData?.map((item, idx) => (
                        <div key={`vcat${idx}`} className='card-container'>
                            <div className='card-parts'>
                                <div className='part-1'>
                                    <Link to="#cate">
                                        <img className='img-card' src={item.imgUrl} alt='v-category' />
                                    </Link>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item.categoryName}
                                    </p>
                                </div>
                                <div className='part-4'>
                                    <button onClick={() => moveToExplore(item?._id)} className='card-btn'>{item.btnText}</button>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            )}


            {isCategorized && (
                <div className='card-section'>
                    {(categorizedVideo?.map((item, idx) => (
                        <div key={`vcat${idx}`} className='card-container'>
                            <div className='card-parts'>
                                <div className='part-1'>
                                    <iframe width="300" height="210" src={`https://www.youtube.com/embed/${item?._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className='part-2'>
                                    <Link style={{ textDecoration: "none", color: 'inherit' }} to={`/videos/${item?._id}`}>{item?.title}</Link>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item.categoryName}
                                    </p>
                                </div>
                                <div className='part-4'>
                                    <Link style={{ textDecoration: "none", color: 'inherit' }} to={`/videos/${item?._id}`}><button className='card-btn'>{'Play'}</button></Link>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            )}


            {isLikesVideos && (
                <div className='card-section'>
                    {(likesVideoData?.map((item, idx) => (
                        <div key={`vcat${idx}`} className='card-container'>
                            <div className='card-parts'>
                                <div className='part-1'>
                                    <iframe width="300" height="210" src={`https://www.youtube.com/embed/${item?._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className='part-2'>
                                    <Link style={{ textDecoration: "none", color: 'inherit' }} to={`/videos/${item?._id}`}>{item?.title}</Link>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item.categoryName}
                                    </p>
                                </div>
                                <div className='part-4'>
                                    <Link style={{ textDecoration: "none", color: 'inherit' }} to={`/videos/${item?._id}`}><button className='card-btn'>{'Play'}</button></Link>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            )}

            {isHistoryVideos && (
                <div className='card-section'>
                    {(historyVideoData?.map((item, idx) => (
                        <div key={`vcat${idx}`} className='card-container'>
                            <div className='card-parts'>
                                <div className='part-1'>
                                    <iframe width="300" height="210" src={`https://www.youtube.com/embed/${item?._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className='part-2'>
                                    <Link style={{ textDecoration: "none", color: 'inherit' }} to={`/videos/${item?._id}`}>{item?.title}</Link>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item.categoryName}
                                    </p>
                                </div>
                                <div className='part-4'>
                                    <Link style={{ textDecoration: "none", color: 'inherit' }} to={`/videos/${item?._id}`}><button className='card-btn'>{'Play'}</button></Link>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            )}


            {isExploreVideoCard && (
                <div className='card-section'>
                    {(exploreVideoData?.map((item, idx) => (
                        <div key={`video${idx}`} className='card-container'>
                            <div className='card-parts'>
                                <div className='part-1'>
                                    <iframe width="300" height="210" src={`https://www.youtube.com/embed/${item?._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className='parts-2'>
                                    <h2 className='card-title'>
                                        <Link className='video-link' style={{ textDecoration: 'none', color: 'aliceblue' }} to={`/videos/${item?._id}`}>
                                            {item?.title}
                                        </Link>
                                    </h2>
                                </div>


                                <div className='common-parts'>
                                    <div className='part-3'>
                                        <p className='card-des'>
                                            {item.viewCount} views | 4 hours ago
                                        </p>
                                    </div>
                                    <div className='part-4'>
                                        <div className='action-icons'>
                                            {(watchLater && watchLater?.watchLaterproducts?.find(video => video?.id === item?.id)) ? <span onClick={() => { unsetfromwatchlater(item?._id) }} className='lik-icon'><img style={{ maxWidth: '35px', maxHeight: '35px' }} className='card-icons' src={watchlaterLightIcon} alt="dislike" /></span> : <span onClick={() => { moveToWatchLater(item?._id) }} className='lik-icon'> <img style={{ maxWidth: '35px', maxHeight: '35px' }} className='card-icons' src={watchlaterDarkIcon} alt="like" /></span>}
                                            <span onClick={() => modalOpration(item?._id)} > <img style={{ maxWidth: '35px', maxHeight: '35px' }} className='card-icons' src={playlistIcon} alt='playlist' /></span>
                                            {(Likes && Likes?.likesproducts?.find((videos) => videos?.id === item?.id)) ? <span onClick={() => { removeFromLikes(item?._id) }}><img style={{ maxWidth: '35px', maxHeight: '35px' }} className='card-icons' src={likesIcon} alt="like" /></span> : <span onClick={() => { addtoLikes(item?._id) }}><img style={{ maxWidth: '35px', maxHeight: '35px' }} src={dislikeIcon} alt='' /></span>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )))}
                </div>
            )}

            {isWatchLater && (
                <div className='card-section'>
                    {(watchvideoLaterData?.map((item, idx) => (
                        <div key={`video${idx}`} className='card-container'>
                            <div className='card-parts'>
                                <div className='part-1'>
                                    <iframe width="300" height="210" src={`https://www.youtube.com/embed/${item?._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className='part-2'>
                                    <h2 className='card-title'>
                                        {item?.title}
                                    </h2>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item?.viewCount} views | 4 hours ago
                                    </p>
                                </div>
                                <div className='part-4'>
                                    {watchLater?.watchLaterproducts?.find(video => video?.id === item?.id) ? <button onClick={() => unsetfromwatchlater(item?._id)} className='card-btn'>{'Undo'}</button> : <button onClick={() => moveToWatchLater(item?._id)} className='card-btn'>{'move to watchlater'}</button>}
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            )}

            {isSinglePLayList && (
                <div className='card-section'>
                    {singlePlaylistVideoData?.map((item, idx) => (
                        <div key={`play-video${idx}`} className='card-container'>
                            <div className='card-parts'>
                                <div className='part-1'>
                                    <iframe width="300" height="210" src={`https://www.youtube.com/embed/${item?._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className='part-2'>
                                    <h2 className='card-title'>
                                        {item?.title}
                                    </h2>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item?.viewCount} views | 4 hours ago
                                    </p>
                                </div>
                                <div className='part-4'>
                                    <button onClick={() => removevideoFromPlaylist(item)} className='card-btn'>{'Remove this'}</button>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            )
            }
            < ToastContainer />
        </>
    )
}

export default OneCard
