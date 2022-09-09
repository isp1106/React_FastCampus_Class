import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosPrc() {
  const [posts, setPosts] = useState(null)
  const getPost = async () => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {title: 'asd', body: 'asdf', userId:1} // 이렇게 생긴 글을 써주세요
    )
    console.log(response.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      {posts && posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  )
}

export default AxiosPrc