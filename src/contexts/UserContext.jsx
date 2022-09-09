import React, { createContext, useReducer } from 'react'
import { userReducer } from '../reducers/userReducer'
import { userData } from '../constants/userData'

export const UserContext = createContext(null)

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, userData)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}