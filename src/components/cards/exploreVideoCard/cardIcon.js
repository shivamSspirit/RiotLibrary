import React, { useEffect, useState } from 'react'
import './cardicon.css'
import OneCard from '../oneCard/oneCard';

function CardIcon(props) {
    const { globalStateproperties, globalVideos, setDynamicProperties,openModal,setModal } = props;
    const [filteredCategory, setFilteredCategory] = useState(null);
    // console.log('from trend', globalStateproperties.selectedsingleVideoCategory);

    useEffect(() => {
        if (globalStateproperties?.selectedsingleVideoCategory) {
            const filtered = globalVideos?.filter((item) => item.category === globalStateproperties.selectedsingleVideoCategory?.categoryName)
            setFilteredCategory(filtered)
        } else {
            return;
        }
    }, [globalStateproperties?.selectedsingleVideoCategory,globalVideos])

    const clicck = (catefgoryName) => {
    const fromnavLnkvfilt = globalVideos?.filter((item)=>item.category===catefgoryName)
    setFilteredCategory(fromnavLnkvfilt);
    }
    
    return (
        <>
            <div className='nav-links'>
                <ul className='categoeryFilter'>
                    <li onClick={()=>clicck('Computer Programming')} className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'Computer Programming' && `active`}`}>Programming</li>
                    <li onClick={()=>clicck('Frontend Development')}  className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'Frontend Development' && `active`}`}>Frontend</li>
                    <li onClick={()=>clicck('Backend Development')}  className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'Backend Development' && `active`}`}>Backend</li>
                    <li onClick={()=>clicck('full stack Development')}  className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'full stack Development' && `active`}`}>fullstack</li>
                    <li onClick={()=>clicck('web3')} className={`cate-li ${globalStateproperties?.selectedsingleVideoCategory?.categoryName === 'web3' && `active`}`}>Blockchanin</li>
                </ul>
            </div>
            <div className='col-container'>
                <OneCard openModal={openModal} setModal={setModal} isExploreVideoCard={true} exploreVideoData={(globalStateproperties?.selectedsingleVideoCategory ? filteredCategory : globalVideos)}/>
                 {/* {(globalStateproperties?.selectedsingleVideoCategory ? filteredCategory : globalVideos)?.map((item, idx) => (
                    <div key={`video${idx}`} className='card-container'>
                        <div className='card-parts'>
                            <div className='part-1'>
                                <iframe width="300" height="210" src={`https://www.youtube.com/embed/${item?._id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className='part-2'>
                                <h2 className='card-title'>
                                    {item?.title}
                                </h2>
                            </div>
                            <div className='part-3'>
                                <p className='card-des'>
                                    {item.viewCount} views | 4 hours ago
                                </p>
                            </div>
                            <div className='part-4'>
                                <button className='card-btn'>watch now</button>
                            </div>
                        </div> 
                        {/* <div className='card-icon'>
                        <img className='img-icon' src={heart} alt='' />
                    </div> 
                
                    </div>
                {/* ))} */}
            </div>
        </>
    )
}

export default CardIcon
