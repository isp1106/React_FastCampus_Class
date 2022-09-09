import React, { useEffect, useState } from 'react'
import {postData} from '../../../constants/postData'
import { NavLink, useSearchParams, useLocation } from 'react-router-dom'
function PostIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState(postData)
  const location = useLocation()
  console.log(location)

  const searchInputHandler = (e) => {
    const filter = e.target.value
    filter ? setSearchParams({filter}) : setSearchParams({})
  }

  useEffect(()=> {
    setPosts(postData.filter((post)=>{
      const filter = searchParams.get("filter")
      const title = post.title.toLowerCase()
      return filter ? title.includes(filter) : true
    }))
  },[searchParams])

  return (
    <div>
      <input onChange={searchInputHandler} />
      {
        posts.map((post)=> (<NavLink style={({ isActive }) => ({color: isActive ? "red" : "black"})} to={`/posts/${post.id}`} state={{ post:posts.find((data) => data.id === post.id)}}><p>{post.title}</p></NavLink>))
      }
    </div>
  )
}

export default PostIndex