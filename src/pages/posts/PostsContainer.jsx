import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../modules/posts'
import PostPresenter from './PostPresenter'

function PostsContainer() {
  const dispatch = useDispatch()
  const {loading, data, error} = useSelector(state => state.posts)
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  if(loading) return <>로딩중..</>
  if(error) return <>로딩중..</>
  if(!data) return null
  return (
    <PostPresenter posts={data} />
  )
}

export default PostsContainer