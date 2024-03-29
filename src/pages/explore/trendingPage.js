import React, { useEffect } from 'react'
import { useGlobal } from '../../context/GlobalContext'
import { ScrollToTop } from '../../components/scrolltotop/ScroolTotop'

import Loader from '../../components/Loader/Loader'
import Header from '../../components/header/Header'
import CardWithIcon from '../../components/sections/exploreVideoSection/cardIcon'
import PlayListModal from '../../components/playlistmanagment/playlistmodal/playlistmodal'

import * as VideoApi from '../../api/videos'

import '../landingpage/landing.css'

function TrendingPage() {
    const { globalVideos, setCurrentCategory, setGlobalVideos, openmodal, setModalOpen, loaderState, setLoaderState } = useGlobal();

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
                <PlayListModal openmodal={openmodal} setModalOpen={setModalOpen} />
                {loaderState ? <Loader /> : <CardWithIcon openmodal={openmodal} setModalOpen={setModalOpen} setCurrentCategory={setCurrentCategory} globalVideos={globalVideos} />}
            </div>
        </>
    )
}

export default TrendingPage
