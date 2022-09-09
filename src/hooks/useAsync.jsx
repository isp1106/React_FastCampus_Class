import { useEffect, useReducer } from 'react'
import { weatherReducer } from '../reducers/weatherReducer'

export default function useAsync(callback){
  const [state, dispatch] = useReducer(weatherReducer, {
    loading: false,
    data: null,
    error: null
  })
  const fetchData = async () => {
    dispatch({type: 'LOADING'})
    try {
      const data = await callback()
      dispatch({type:'SUCCESS', data})
    }
    catch(e){
      dispatch({type:'ERROR', error: e})
    }
  }
  useEffect(()=>{
    fetchData()
  }, [])
  return state
}