import React,{useState} from 'react'
import { useGlobal } from '../context/GlobalContext'

import Header from '../components/header/Header'
import CardWithIcon from '../components/cards/exploreVideoCard/cardIcon'
import PlayListModal from '../components/playlistmanagment/playlistmodal/playlistmodal'

import './landing.css'



function TrendingPage() {
    const {globalVideos,globalVidCategory, globalStateProperties } = useGlobal();
    const [openmodal,setModalOpen] = useState(false)
    return (
        <>
            <div className='trend-page'>
                <Header />
                <PlayListModal openModal={openmodal} setModal={setModalOpen}/>
                <CardWithIcon openModal={openmodal} setModal={setModalOpen} globalStateproperties={globalStateProperties} globalVideos ={globalVideos} />   
            </div>
        </>
    )
}

export default TrendingPage
