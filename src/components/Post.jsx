import React from 'react'
import { useGetPostByIdQuery } from '../api/postApi'

function Post() {
  const {data: post, isLoading, isError} = useGetPostByIdQuery(1)
  if (isLoading) {return<>로딩중...</>}
  if (isError || !post) {return <>오류 발생</>}

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default Post