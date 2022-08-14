import React from 'react'
import './historysection.css'
import { useHistory } from '../../../context/historyContext'
import OneCard from '../../cards/oneCard/oneCard'

function HistorySection() {
  const { history } = useHistory()
  return (
    <div className='history-sec-container'>
      <div className='history-hero-part'>
        <h2 className='history-title'>My History({`${history?.historyvideos?.length}`})</h2>
      </div>
      <OneCard isHistoryVideos={true} historyVideoData={history?.historyvideos} />
    </div>

  )
}

export default HistorySection
