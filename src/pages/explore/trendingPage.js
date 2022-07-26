import React, { useState, useEffect } from 'react'
import { useGlobal } from '../../context/GlobalContext'
import { ScrollToTop } from '../../components/scrolltotop/ScroolTotop'

import Loader from '../../components/Loader/Loader'
import Header from '../../components/header/Header'
import CardWithIcon from '../../components/sections/exploreVideoSection/cardIcon'
import PlayListModal from '../../components/playlistmanagment/playlistmodal/playlistmodal'

import * as VideoApi from '../../api/videos'


import '../landingpage/landing.css'

function TrendingPage() {
    const { globalVideos, setCurrentCategory, setGlobalVideos, currentcategory, loaderState, setLoaderState } = useGlobal();
    const [openmodal, setModalOpen] = useState(false);


    useEffect(() => {
        const fetchVideo = async () => {
            setLoaderState(true)
            const response = await VideoApi.getVideoList();
            if (response) {
                setLoaderState(false)
                setGlobalVideos(response?.data?.videos)
            }
        }
        fetchVideo();
    }, [])


    return (
        <>
            <div className='trend-page'>
                <ScrollToTop />
                <Header />
                <PlayListModal openModal={openmodal} setModal={setModalOpen} />
                {loaderState ? <Loader /> : <CardWithIcon openModal={openmodal} setModal={setModalOpen} setCurrentCategory={setCurrentCategory} globalVideos={globalVideos} />}
            </div>
        </>
    )
}

export default TrendingPage
