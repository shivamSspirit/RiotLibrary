import React, { useEffect } from 'react'
import './catefilter.css'
function CateFilter(props) {
    const {category,click} =  props;
    useEffect(()=>{
        console.log('cate',category?.categoryName)
    },[category?.categoryName])
  return (
    <div>
       <div className='nav-links'>
                <ul className='categoeryFilter'>
                    <li onClick={() => click('Computer Programming')} className={`cate-li ${category?.categoryName === 'Computer Programming' && `active`}`}>Programming</li>
                    <li onClick={() => click('Frontend Development')} className={`cate-li ${category?.categoryName === 'Frontend Development' && `active`}`}>Frontend</li>
                    <li onClick={() => click('Backend Development')} className={`cate-li ${category?.categoryName === 'Backend Development' && `active`}`}>Backend</li>
                    <li onClick={() => click('full stack Development')} className={`cate-li ${category?.categoryName === 'full stack Development' && `active`}`}>fullstack</li>
                    <li onClick={() => click('web3')} className={`cate-li ${category?.categoryName === 'web3' && `active`}`}>Blockchanin</li>
                    <li onClick={() => click('all')} className={`cate-li ${category?.categoryName === 'all' && `active`}`}>all</li>
                </ul>
            </div>
    </div>
  )
}

export default CateFilter
