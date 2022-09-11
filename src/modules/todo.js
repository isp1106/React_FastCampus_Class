const ADD_TODO ="todo/ADD_TODO"
const DELETE_TODO="todo/DELETE_TODO"

// 새로운 todoItem
let todoId = 1
export function addTodo(todoItem) {
  return {
    type: ADD_TODO,
    payload:{...todoItem ,id: todoId++}
  }
}
export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: {todoId}
  }
}

const initialState = []

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case DELETE_TODO:
      return state.filter((element) => element.id !== action.payload.todoId)
      default:
        return state
    }
}