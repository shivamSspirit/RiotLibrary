import React, { useEffect, useState } from 'react'
import './cardicon.css'
import OneCard from '../oneCard/oneCard';

function CardIcon(props) {
    const { globalStateproperties, globalVideos, openModal, setModal } = props;
    const [filteredCategory, setFilteredCategory] = useState(null);

    useEffect(() => {
        if (globalStateproperties?.selectedsingleVideoCategory) {
            const filtered = globalVideos?.filter((item) => item.category === globalStateproperties.selectedsingleVideoCategory?.categoryName)
            setFilteredCategory(filtered)
        } else {
            return;
        }
    }, [globalStateproperties?.selectedsingleVideoCategory, globalVideos])

    const clicck = (catefgoryName) => {
        const fromnavLnkvfilt = globalVideos?.filter((item) => item.category === catefgoryName)
        setFilteredCategory(fromnavLnkvfilt);
    }

    return (
        <>
            <div className='nav-links'>
                <ul className='categoeryFilter'>
                    <li onClick={() => clicck('Computer Programming')} className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'Computer Programming' && `active`}`}>Programming</li>
                    <li onClick={() => clicck('Frontend Development')} className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'Frontend Development' && `active`}`}>Frontend</li>
                    <li onClick={() => clicck('Backend Development')} className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'Backend Development' && `active`}`}>Backend</li>
                    <li onClick={() => clicck('full stack Development')} className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'full stack Development' && `active`}`}>fullstack</li>
                    <li onClick={() => clicck('web3')} className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'web3' && `active`}`}>Blockchanin</li>
                </ul>
            </div>
            <div className='col-container'>
                <OneCard openModal={openModal} setModal={setModal} isExploreVideoCard={true} exploreVideoData={(globalStateproperties?.selectedsingleVideoCategory ? filteredCategory : globalVideos)} />
            </div>
        </>
    )
}

export default CardIcon
