import React, { useEffect, useRef, useState } from 'react'
import TodoItem from '../TodoItem'
import TodoAdd from '../TodoAdd'
import * as S from './style'
function TodoList() {
  const todoId = useRef(2)
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      date: '2022-07-29',
      content: '강의하기',
      checked: false,
    },
  ])

  const [sortedData, setSortedData] = useState([])

  useEffect(() => {
    setSortedData(todoData.sort((a, b) => a.checked - b.checked))
  }, [todoData])

  const todoRemoveHandler = (id) => {
    setTodoData(todoData.filter((itemData) => itemData.id !== id))
  }

  const todoCheckHandler = (id) => {
    setTodoData(
      todoData.map((itemData) =>
        itemData.id === id
          ? { ...itemData, checked: !itemData.checked }
          : itemData,
      ),
    )
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 TodoList</S.TodoTitle>
      <TodoAdd todoId={todoId} todoData={todoData} setTodoData={setTodoData} />
      {sortedData.map((itemData) => {
        return (
          <TodoItem
            key={itemData.id}
            itemData={itemData}
            todoRemoveHandler={todoRemoveHandler}
            todoCheckHandler={todoCheckHandler}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoList
