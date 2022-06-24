import React from 'react'
import 'commentcard.css'

import PensilIcon from '../../../asset/img/pensil.png'
import ClockIcon from '../../../asset/img/pensil.png'
import DeleteIcon from '../../../asset/img/pensil.png'


function CommentCard({comment}) {
  return (
    <div className='commnet-card-container'>
     <div className='c-card'>
        <div className='c-card-part'>
            <p>{comment?.title}</p>
            <p>{comment?.description}</p>
        </div>
        <div className='c-card-part'>
            <span><img className='clock' src={ClockIcon} alt=''/></span>
            <p>{'timestamp'}</p>
        </div>
        <div className='c-card-part'>
        <span><img className='pensil' src={PensilIcon} alt=''/></span>
        <span><img className='delete' src={DeleteIcon} alt=''/></span>
        </div>
     </div>
    </div>
  )
}

export default CommentCard
