import React from 'react'
import Header from '../../components/header/Header'
import Watchlatersection from '../../components/sections/watchlaterSection/watchlatersection'
import { ScrollToTop } from '../../components/scrolltotop/ScroolTotop'

function WatchLater() {
    return (
        <div style={{height:'100vh'}} className='mainwatchlater-container'>
            <ScrollToTop/>
            <Header />
            <Watchlatersection />
        </div>
    )
}

export default WatchLater
