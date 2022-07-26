import React, { useEffect, useState } from 'react'
import './cardicon.css'
import OneCard from '../../cards/oneCard/oneCard';
import CateFilter from '../../cateFilter/CateFilter';
import { useGlobal } from '../../../context/GlobalContext';

function CardIcon(props) {
    const { globalVideos, openModal, setModal, setCurrentCategory } = props;
    const { curretcategory } = useGlobal()
    const [filteredCategory, setFilteredCategory] = useState(null);
    const [currentcate,setCurrentCate] = useState('')

    useEffect(() => {
        if (currentcate!=="all") {
            const filtered = globalVideos?.filter((item) => item.category === currentcate)
            setFilteredCategory(filtered)
        }
    }, [currentcate])

    useEffect(()=>{
        if(curretcategory){
            setCurrentCate(curretcategory)
        }
    },[curretcategory])

    useEffect(() => {
        if (!currentcate) {
            setFilteredCategory(globalVideos)
        }
    }, [globalVideos, currentcate])

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
                <OneCard openModal={openModal} setModal={setModal} isExploreVideoCard={true} exploreVideoData={filteredCategory} />
            </div>
        </>
    )
}

export default CardIcon
