import React from 'react'
import { useGetPostsQuery } from '../api/postApi'

function Posts() {
  const {data: posts, isLoading, isError} = useGetPostsQuery(2)

  if (isLoading) {return<>로딩중...</>}
  if (isError || !posts) {return <>오류 발생</>}

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts