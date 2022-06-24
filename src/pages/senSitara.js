import React, { useEffect, useState,useMemo } from 'react'
import { useParams } from 'react-router-dom'

import SenSitara from '../components/senSitara/senSitara'
import SingleVCategory from '../components/senSitara/catogarixedVideo/cateGorizedVideo'
import './sensita.css'
import Header from '../components/header/Header';
import * as videoApis from '../api/videos'

import { useGlobal } from '../context/GlobalContext'

function SenSitaracomppo() {
    const { videoId } = useParams()
    const { globalVideos } = useGlobal();
    const [currentVideo, setCurrentVideos] = useState(null)
    const [categorized, setCategorized] = useState(null);


    useEffect(() => {
        if (videoId) {
            (async()=>{
                const response = await videoApis?.getSingleVideo(videoId);
                setCurrentVideos(response?.data?.video)
            })()
        }
    }, [videoId])

    const givemeARR = useMemo(() => {
        return globalVideos;
      }, [globalVideos]);

    useEffect(() => {
        if (currentVideo) {
            const mains = givemeARR;
            console.log('dasdsa',mains)
            const filtred = mains?.filter(item => item.category === currentVideo?.category)
            setCategorized(filtred)
        }
    }, [currentVideo,givemeARR])

    return (
        <>
            <Header />
            <div className='sensitara'>
                <div>
                    <SenSitara fetchOne={currentVideo} />
                </div>
                <div className='part-2'>
                    <SingleVCategory categorizedVideos={categorized} />
                </div>
            </div>
        </>

    )
}

export default SenSitaracomppo
