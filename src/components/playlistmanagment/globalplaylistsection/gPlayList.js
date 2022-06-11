import React from 'react'
import './gplaylist.css'
import PlaylistCard from '../playlistCard/playlistCard'

function GPlayList() {
  return (
    <div className='main-container'>
      <h2>global playlist page</h2>
      <div>
      <PlaylistCard/>
      </div>
    </div>
  )
}

export default GPlayList
