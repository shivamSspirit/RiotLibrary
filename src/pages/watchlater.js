import React from 'react'
import Header from '../components/header/Header'
import Watchlatersection from '../components/cards/watchlaterCard/watchlatersection'
import { ScrollToTop } from '../components/scrolltotop/ScroolTotop'

function WatchLater() {
    return (
        <div>
            <ScrollToTop/>
            <Header />
            <Watchlatersection />
        </div>
    )
}

export default WatchLater
