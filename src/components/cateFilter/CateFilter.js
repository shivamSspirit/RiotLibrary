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
          <li onClick={() => click('Star Guardian Version')} className={`cate-li ${category === 'Star Guardian Version' && `active`}`}>Star</li>
          <li onClick={() => click('sessions lol')} className={`cate-li ${category === 'sessions lol' && `active`}`}>Lol</li>
          <li onClick={() => click('Pentakill')} className={`cate-li ${category === 'Pentakill' && `active`}`}>Pentakill</li>
          <li onClick={() => click('Warsongs')} className={`cate-li ${category === 'Warsongs' && `active`}`}>Warsongs</li>
          <li onClick={() => click('kDa')} className={`cate-li ${category === 'kDa' && `active`}`}>KdA</li>
          <li onClick={() => click('all')} className={`cate-li ${category === 'all' && `active`}`}>All</li>
        </ul>
      </div>
    </div>
  )
}

export default CateFilter
