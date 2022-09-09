import React from 'react'
import { useLocation } from 'react-router-dom'

function PhotoDetail() {
  const location = useLocation()
  const {url} = location.state ? location.state : {url:''}

  return (
    <div>
      <img src={url} />
    </div>
  )
}

export default PhotoDetail