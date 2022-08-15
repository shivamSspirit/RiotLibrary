import React, { useEffect } from 'react'
import './catefilter.css'
function CateFilter(props) {
  const { category, click } = props;
  useEffect(() => {
    if (category) {
      console.log('cate', category)
    }
  }, [category, click])
  return (
    <div>
      <div className='nav-links'>
        <ul className='categoeryFilter'>
          <li onClick={() => click('Star Guardian Version')} className={` ${category === 'Star Guardian Version' && `active`}`}><span className='cate-li'>Star</span></li>
          <li onClick={() => click('sessions lol')} className={` ${category === 'sessions lol' && `active`}`}><span className='cate-li'>Leage</span></li>
          <li onClick={() => click('Pentakill')} className={` ${category === 'Pentakill' && `active`}`}><span className='cate-li'>Pentakill</span></li>
          <li onClick={() => click('Warsongs')} className={` ${category === 'Warsongs' && `active`}`}><span className='cate-li'>Warsongs</span></li>
          <li onClick={() => click('kDa')} className={` ${category === 'kDa' && `active`}`}><span className='cate-li'>kDa</span></li>
          <li onClick={() => click('all')} className={` ${category === 'all' && `active`}`}><span className='cate-li'>All</span></li>
        </ul>
      </div>
    </div>
  )
}

export default CateFilter
