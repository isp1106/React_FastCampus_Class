import React from 'react'
import { Outlet } from 'react-router-dom'

function Posts() {
  return (
    <div>
      Posts
      <Outlet />
    </div>

  )
}

export default Posts