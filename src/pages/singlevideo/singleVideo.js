import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import SingleVideos from '../../components/SingleVideos/SingleVideos'
import SingleVCategory from '../../components/SingleVideos/catogarixedVideo/cateGorizedVideo'
import './singlevideo.css'
import Header from '../../components/header/Header';
import * as videoApis from '../../api/videos'

import Loader from '../../components/Loader/Loader'

import { useGlobal } from '../../context/GlobalContext'
import { ScrollToTop } from '../../components/scrolltotop/ScroolTotop'
import PlayListModal from '../../components/playlistmanagment/playlistmodal/playlistmodal'
import { Modal } from 'react-bootstrap'


function SenSitaracomppo() {
    const { videoId } = useParams()
    const { globalVideos, loaderState, setLoaderState, openmodal, setModalOpen } = useGlobal();
    const [currentVideo, setCurrentVideos] = useState(null)
    const [categorized, setCategorized] = useState(null);

    // useEffect(() => {
    //     if (openmodal) {
    //         console.log('fsdsdf', openmodal)
    //     }
    // }, [openmodal])

    useEffect(() => {
        if (videoId) {
            (async () => {
                setLoaderState(true)
                const response = await videoApis?.getSingleVideo(videoId);
                if (response) {
                    setLoaderState(false)
                    setCurrentVideos(response?.data?.video)
                }
            })()
        }
    }, [videoId])

    const givemeARR = useMemo(() => {
        return globalVideos;
    }, [globalVideos]);

    useEffect(() => {
        if (currentVideo) {
            const mains = givemeARR;
            console.log('dasdsa', mains)
            const filtred = mains?.filter(item => item.category === currentVideo?.category)
            setCategorized(filtred)
        }
    }, [currentVideo, givemeARR])

    return (
        <div className='single-page'>
            <div className='main-single-page'>
                <ScrollToTop />
                <PlayListModal openmodal={openmodal} setModalOpen={setModalOpen} />
                <Header />

                {loaderState ?
                    <Loader /> :
                    <div className='sensitara'>
                        <div className='part-one'>
                            <SingleVideos fetchOne={currentVideo} setModalOpen={setModalOpen} />
                        </div>
                        <div className='part-2'>
                            <SingleVCategory categorizedVideos={categorized} />
                        </div>
                    </div>
                }
            </div>
        </div>


    )
}

export default SenSitaracomppo
