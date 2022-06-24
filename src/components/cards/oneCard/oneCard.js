import React from 'react'
import { useGlobal } from '../../../context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { useWatchLater } from '../../../context/watchLaterContext'
import { usePlayList } from '../../../context/playListContext'
import { useLikes } from '../../../context/likeContext'

import * as LikesApis from '../../../api/likes'
import * as CategoryPis from '../../../api/category'
import * as ActionTypes from '../../../constant/actions'
import { useWatchLaterOperation } from '../../../hooks/watchlater'

import { Link } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown';


function OneCard(props) {
    const { isCategoryCard, CategoryCardData, isExploreVideoCard, exploreVideoData, isWatchLater, watchvideoLaterData, setModal, isSinglePLayList, singlePlaylistVideoData, isCategorized, categorizedVideo } = props;
    const { setDynamicProperties } = useGlobal();
    const navigate = useNavigate();
    const { watchLater } = useWatchLater();
    const { playList, dispatchplayList } = usePlayList()
    const { Likes, dispatchLikes } = useLikes();
    const { postToWatchLater, removeFromWatchLater } = useWatchLaterOperation()

    console.log('fun', playList)


    const moveToExplore = async (videoCategoryID) => {
        const res = await CategoryPis?.getSingleCategory(videoCategoryID);
        await setDynamicProperties('selectedsingleVideoCategory', res.data.category);
        navigate('/videos')
    }


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

    const modalOpration = async (currentvideoID) => {
        const currentselectedVideo = exploreVideoData?.find(item => item?._id === currentvideoID)
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.SET_CURRENT_VIDEO,
            payload: currentselectedVideo
        })
        setModal(true);
    }

    const addtoLikes = async (videoId) => {
        const newItem = exploreVideoData?.find(item => item?._id === videoId)
        const response = await LikesApis?.postLikedVideo(newItem);

        await dispatchLikes({
            type: ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
    }

    const removeFromLikes = async (videoId) => {
        const response = await LikesApis?.deleteLikedVideo(videoId);
        await dispatchLikes({
            type: ActionTypes?.likeAction?.REMOVE_FROM_LIKES,
            payload: videoId
        })

        await dispatchLikes({
            type: ActionTypes?.likeAction?.ADD_TO_LIKES,
            payload: response?.data?.likes
        })
    }

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
                                    <Link to={`/videos/${item?._id}`}>{item?.title}</Link>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item.categoryName}
                                    </p>
                                </div>
                                <div className='part-4'>
                                    <Link to={`/videos/${item?._id}`}><button className='card-btn'>{'Play'}</button></Link>
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
                                <div className='part-2'>
                                    <h2 className='card-title'>
                                        <Link to={`/videos/${item?._id}`}>{item?.title}</Link>
                                    </h2>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item.viewCount} views | 4 hours ago
                                    </p>
                                </div>
                                <div className='part-4'>

                                    <Dropdown>
                                        <Dropdown.Toggle style={{ background: 'transparent', border: 'none' }} variant="success" id="dropdown-basic">
                                            Actions
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className='drops' >
                                                {(Likes && Likes?.likesproducts?.find(video => video?.id === item?.id)) ? <button onClick={() => { removeFromLikes(item?._id) }} className='lik-icon'>Unlike</button> : <button onClick={() => { addtoLikes(item?._id) }} className='lik-icon'>Add to likes</button>}
                                            </Dropdown.Item>
                                            <Dropdown.Item className='drops'> <button onClick={() => modalOpration(item?._id)} >Add to playlist</button></Dropdown.Item>
                                            <Dropdown.Item className='drops' > {watchLater?.watchLaterproducts?.find(video => video?.id === item?.id) ? <button onClick={() => unsetfromwatchlater(item?._id)} >{'Undo'}</button> : <button onClick={() => moveToWatchLater(item?._id)}>{'Add to watchlater'}</button>}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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
                                    {watchLater?.watchLaterproducts?.find(video => video?.id === item?.id) ? <button onClick={() => unsetfromwatchlater(item?._id)} className='card-btn'>{'Undo'}</button> : <button onClick={() => moveToWatchLater(item?._id)} className='card-btn'>{'move to watchlater'}</button>}
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            )
            }
        </>
    )
}

export default OneCard
