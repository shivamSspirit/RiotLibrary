import React, { useEffect, useState } from 'react'
import './cardicon.css'
import OneCard from '../oneCard/oneCard';
import CateFilter from '../../cateFilter/CateFilter';
import { useGlobal } from '../../../context/GlobalContext';

function CardIcon(props) {
    const { globalVideos, openModal, setModal, setCurrentCategory } = props;
    const { curretcategory } = useGlobal()
    const [filteredCategory, setFilteredCategory] = useState(null);

    useEffect(() => {
        if (curretcategory!=="all") {
            const filtered = globalVideos?.filter((item) => item.category === curretcategory)
            setFilteredCategory(filtered)
        }
    }, [curretcategory])

    useEffect(() => {
        if (!curretcategory) {
            setFilteredCategory(globalVideos)
        }
    }, [globalVideos, curretcategory])

    const clicck = (catefgoryName) => {
        setCurrentCategory(catefgoryName);
        if (catefgoryName === 'all') {
          setFilteredCategory(globalVideos)
        } else {
            const fromnavLnkvfilt = globalVideos?.filter((item) => item.category === catefgoryName)
            setFilteredCategory(fromnavLnkvfilt);
        }
    }

    return (
        <>
            <CateFilter click={clicck} category={curretcategory} />
            <div className='col-container'>
                <OneCard openModal={openModal} setModal={setModal} isExploreVideoCard={true} exploreVideoData={filteredCategory&&filteredCategory} />
            </div>
        </>
    )
}

export default CardIcon
