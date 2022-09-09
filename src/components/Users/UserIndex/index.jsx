import React, { useEffect, useState } from 'react'
import {userData} from '../../../constants/userData'
import { Link, useSearchParams, useLocation } from 'react-router-dom'
function UserIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [users, setUsers] = useState(userData)
  const location = useLocation()
  console.log(location)

  const searchInputHandler = (e) => {
    const filter = e.target.value
    filter ? setSearchParams({filter}) : setSearchParams({})
  }

  useEffect(()=> {
    setUsers(userData.filter((user)=>{
      const filter = searchParams.get("filter")
      const title = user.name.toLowerCase()
      return filter ? title.includes(filter) : true
    }))
  },[searchParams])

  return (
    <div>
      <input onChange={searchInputHandler} />
      {
        users.map((user)=> (<Link to={`/users/${user.id}`} 
        state={{ post:users.find((data) => data.id === user.id)}}><p>
          {user.title}</p></Link>))
      }
    </div>
  )
}

export default UserIndex