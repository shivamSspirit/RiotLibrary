import React from 'react'
import PlayListForm from '../playlistform/playList'

function PlayListModal(props) {
  const { openModal, setModal } = props;
  return (
    <div>
      <PlayListForm openModal={openModal} setModal={setModal} />
    </div>
  )
}

export default PlayListModal