import React, { useEffect } from 'react'
import './catefilter.css'
function CateFilter(props) {
  const { category, click } = props;
  console.log('catessss', category)
  useEffect(() => {
    if (category) {
      console.log('cate', category)
    }
  }, [category, click])
  return (
    <div>
      <div className='nav-links'>
        <ul className='categoeryFilter'>
          <li onClick={() => click('Computer Programming')} className={`cate-li ${category === 'Computer Programming' && `active`}`}>Programming</li>
          <li onClick={() => click('Frontend Development')} className={`cate-li ${category === 'Frontend Development' && `active`}`}>Frontend</li>
          <li onClick={() => click('Backend Development')} className={`cate-li ${category === 'Backend Development' && `active`}`}>Backend</li>
          <li onClick={() => click('full stack Development')} className={`cate-li ${category === 'full stack Development' && `active`}`}>fullstack</li>
          <li onClick={() => click('web3')} className={`cate-li ${category === 'web3' && `active`}`}>Blockchanin</li>
          <li onClick={() => click('all')} className={`cate-li ${category === 'all' && `active`}`}>all</li>
        </ul>
      </div>
    </div>
  )
}

export default CateFilter
