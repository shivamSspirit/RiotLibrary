import React from 'react'
import './gplaylist.css'
import { usePlayList } from '../../../context/playListContext'
import PlaylistCard from '../playlistCard/playlistCard'

function GPlayList() {
  // const { playList, dispatchplayList } = usePlayList()
// console.log('playlist from playlist page',playList)
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
