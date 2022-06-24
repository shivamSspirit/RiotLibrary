import React from 'react'
import './watchlater.css'
import { useWatchLater } from '../../../context/watchLaterContext'
import OneCard from '../oneCard/oneCard';

function Watchlatersection() {
    const { watchLater } = useWatchLater();
    return (
        <div className='mainSectionm'>
            <div className='hero-part'>
                <h2 className='title'>My Pending WatchList({`${watchLater?.watchLaterproducts?.length}`})</h2>
            </div>
            <OneCard isWatchLater={true} watchvideoLaterData={watchLater?.watchLaterproducts} />
        </div>
    )
}

export default Watchlatersection
