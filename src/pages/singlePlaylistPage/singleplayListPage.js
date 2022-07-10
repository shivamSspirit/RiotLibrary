import React from 'react'
import Header from '../../components/header/Header'
import SinglePlayListComp from '../../components/playlistmanagment/singlePlayList/singleplayList'
import { ScrollToTop } from '../../components/scrolltotop/ScroolTotop'

function SinglePlayListPage() {
   
  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <SinglePlayListComp />
    </div>
  )
}

export default SinglePlayListPage
