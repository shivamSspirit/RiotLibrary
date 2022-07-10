import React from 'react'
import OneCard from '../../cards/oneCard/oneCard'
import './categorizedvideo.css'

function SingleVCategory({categorizedVideos}) {
  return (
    <div className='category-side'>
        <div className='side-container'>
         <OneCard isCategorized ={true} categorizedVideo={categorizedVideos} />
        </div>
    </div>
  )
}

export default SingleVCategory
