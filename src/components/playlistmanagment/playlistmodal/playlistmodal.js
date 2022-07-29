import React, { useEffect } from 'react'
import PlayListForm from '../playlistform/playList'

function PlayListModal(props) {
  const { openmodal, setModalOpen } = props;

  useEffect(()=>{
    if(openmodal){
      console.log('opennew',openmodal)
    }
  },[openmodal])
  return (
    <div>
      <PlayListForm openmodal={openmodal} setModalOpen={setModalOpen} />
    </div>
  )
}

export default PlayListModal