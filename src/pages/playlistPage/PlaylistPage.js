import React from 'react'
import Header from '../../components/header/Header'
import GPlayList from '../../components/playlistmanagment/globalplaylistsection/gPlayList'
import { ScrollToTop } from '../../components/scrolltotop/ScroolTotop'

function PlaylistPage() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <GPlayList />
    </div>
  )
}

export default PlaylistPage
