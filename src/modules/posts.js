import axios from "axios"

// GET_POSTS -> 요청을 보내니까 로딩이 걸리도록
// GET_POSTS_SUCCESS -> 요청 성공했으니까 응답 데이터를 저장하도록
// GET_POSTS_ERROR -> 요청 실패했으니 에러 저장하도록
const GET_POSTS = "posts/GET_POSTS"
const GET_POST_SUCCESS ="posts/GET_POSTS_SUCCESS"
const GET_POSTS_ERROR ="posts/GET_POSTS_ERROR"

// 액션 함수 (객체 생성이 아니라, 바로 Dispatch 하는 함수)
export const getPosts = () => async (dispatch, getState) => {
  dispatch({type: GET_POSTS})
  try{
    const responese = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({type: GET_POST_SUCCESS, paylod: {posts: responese.data}})    
  } catch (e) {
    dispatch({type: GET_POSTS_ERROR, erroe: e})
    
  }
}

// 초기값
const initialState = {
  loading: false,
  data: null,
  error: null
}

// 리듀서
export default function posts(state = initialState, action) {
  switch (action.type){
    case GET_POSTS:
      return{
        loading: true,
        data: null,
        error: null
      }
      case GET_POST_SUCCESS:
        return{
          loading: false,
          data: action.paylod.posts,
          error: null
        }
      case GET_POSTS_ERROR:
        return{
          loading: false,
          data: null,
          error: action.null
      }
      default:
        return state
    
  }
}