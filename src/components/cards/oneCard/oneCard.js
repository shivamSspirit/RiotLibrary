import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../../../context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { useWatchLater } from '../../../context/watchLaterContext'
import { usePlayList } from '../../../context/playListContext'

import * as CategoryPis from '../../../api/category'
import * as WatchLaterApi from '../../../api/watchlater'
import * as ActionTypes from '../../../constant/actions'


function OneCard(props) {
    const { isCategoryCard, CategoryCardData, isExploreVideoCard, exploreVideoData, isWatchLater, watchvideoLaterData, setModal } = props;
    const { setDynamicProperties } = useGlobal();
    const navigate = useNavigate();
    const { watchLater, dispatchWatchlater } = useWatchLater();
    const { playList, dispatchplayList } = usePlayList()

    console.log(playList)

    const moveToExplore = async (videoCategoryID) => {
        const res = await CategoryPis?.getSingleCategory(videoCategoryID);
        await setDynamicProperties('selectedsingleVideoCategory', res.data.category);
        navigate('/videos')
    }


    const moveToWatchLater = async (videoId) => {
        const selectedProduct = exploreVideoData?.find(item => item?.id === videoId)
        const res = await WatchLaterApi?.postwatchVideo(selectedProduct)
        await dispatchWatchlater({
            type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
            payload: res?.data?.watchlater
        })
    }


    const unsetfromwatchlater = async (videoId) => {
        const res = await WatchLaterApi?.deletewatchVideo(videoId)
        console.log('res from remove from wathc later', res)

        await dispatchWatchlater({
            type: ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER,
            payload: res?.data?.watchlater
        })
    }

    const modalOpration = async (currentvideoID) => {
        const currentselectedVideo = exploreVideoData?.find(item => item?._id === currentvideoID)
        console.log('selectedvideo', currentselectedVideo)
        await dispatchplayList({
            type: ActionTypes?.playlistmanagment?.SET_CURRENT_VIDEO,
            payload: currentselectedVideo
        })
        setModal(true);
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
                                <div className='part-2'>
                                    <Link to={'#categoory'} className='card-title'>
                                        <h4>{item.title}</h4>
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
                                        {item?.title}
                                    </h2>
                                </div>
                                <div className='part-3'>
                                    <p className='card-des'>
                                        {item.viewCount} views | 4 hours ago
                                    </p>
                                </div>

                                <div className='part-4'>
                                    <i onClick={() => modalOpration(item?._id)} className='fa-solid fa-file-plus'>add to playlist..</i>
                                </div>

                                <div className='part-4'>
                                    {watchLater?.watchLaterproducts?.find(video => video?.id === item?.id) ? <button onClick={() => unsetfromwatchlater(item?.id)} className='card-btn'>{'Undo'}</button>   :<button onClick={() => moveToWatchLater(item?.id)} className='card-btn'>{'move to watchlater'}</button>}
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
                                    {watchLater?.watchLaterproducts?.find(video => video?.id === item?.id) ? <button onClick={() => unsetfromwatchlater(item?.id)} className='card-btn'>{'Undo'}</button>   :<button onClick={() => moveToWatchLater(item?.id)} className='card-btn'>{'move to watchlater'}</button>}
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            )}
        </>
    )
}

export default OneCard
