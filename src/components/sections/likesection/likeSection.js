import React from 'react'
import { useLikes } from '../../../context/likeContext'
import OneCard from '../../cards/oneCard/oneCard'

import './likesection.css'

function LikeSection() {
  const { Likes } = useLikes();
  return (
    <div className='like-sec-container'>
      <div className='like-hero-part'>
        <h2 className='like-title'>My LikeList({`${Likes?.likesproducts?.length}`})</h2>
      </div>
      <OneCard isLikesVideos={true} likesVideoData={Likes?.likesproducts} />
    </div>
  )
}

export default LikeSection
