import React from 'react'
import SenSitara from '../components/senSitara/senSitara'

import { useContext } from 'react'
import { Context } from '../context/GlobalContext'
import CardIcon from '../components/cards/exploreVideoCard/cardIcon';
import OneCard from '../components/cards/oneCard/oneCard';

import './sensita.css'
import Header from '../components/header/Header';

function SenSitaracomppo() {
    const context = useContext(Context);
    const { globalVideos } = context;

    return (
        <>
        <Header/>
         <div className='sensitara'>
            <div>
                <SenSitara fetchOne={globalVideos} />
            </div>
            <div className='part-2'>
                {/* <OneCard landVideos={globalVideos} /> */}
            </div>
        </div>
        </>
       
    )
}

export default SenSitaracomppo
