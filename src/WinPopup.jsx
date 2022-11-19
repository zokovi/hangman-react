import React from 'react'
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react'

export default function WinPopup({win, setWin}) {
  const [open, setOpen] = useState(win)
  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    setOpen(win);
  }, [win]);

  return (    
    <Popup 
      className="winPopup" 
      open={open} 
      closeOnDocumentClick={true}
      onClose={closeModal}
      position={'center center'}
    >
      <img className=" lazyloaded" src="https://acegif.com/wp-content/uploads/firework-4.gif" data-orig-src="https://acegif.com/wp-content/uploads/firework-4.gif" alt="Fireworks GIFs"></img>
      <span>
        You Win!
      </span>
    </Popup>
  )
}