import React, { useEffect, useState } from 'react'
import './cardicon.css'
import OneCard from '../oneCard/oneCard';
import CateFilter from '../../cateFilter/CateFilter';

function CardIcon(props) {
    const { globalStateproperties, globalVideos, openModal, setModal } = props;
    const [filteredCategory, setFilteredCategory] = useState(null);

    useEffect(() => {
        if (globalStateproperties?.selectedsingleVideoCategory?.categoryName) {
            const filtered = globalVideos?.filter((item) => item.category === globalStateproperties?.selectedsingleVideoCategory?.categoryName)
            setFilteredCategory(filtered)
        }
    }, [globalStateproperties?.selectedsingleVideoCategory?.categoryName])

    useEffect(() => {
        if (!globalStateproperties?.selectedsingleVideoCategory?.categoryName) {
            setFilteredCategory(globalVideos)
        }
    }, [globalVideos,globalStateproperties?.selectedsingleVideoCategory?.categoryName])

    const clicck = (catefgoryName) => {
        if (catefgoryName === 'all') {
            setFilteredCategory(globalVideos)
        } else {
            const fromnavLnkvfilt = globalVideos?.filter((item) => item.category === catefgoryName)
            setFilteredCategory(fromnavLnkvfilt);
        }
    }

    return (
        <>
            <CateFilter click={clicck} category={globalStateproperties?.selectedsingleVideoCategory} />
            <div className='col-container'>
                <OneCard openModal={openModal} setModal={setModal} isExploreVideoCard={true} exploreVideoData={filteredCategory} />
            </div>
        </>
    )
}

export default CardIcon
