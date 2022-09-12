import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts'
    }),
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`
    }),
    createPost: builder.mutation({
      query: ({data}) => ({
        url: 'posts',
        method: 'POST',
        body: data,
      })
    })
  })
})

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = postApi