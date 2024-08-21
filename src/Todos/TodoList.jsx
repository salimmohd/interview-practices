import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../redux/reducer'
const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    const [text, setText] = useState('')
    const [editingTodo, setEditingTodo] = useState(null)
    const dispatch = useDispatch()
   
    const hanldeSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
    }
    const editItem = (todo) => {
        setText(todo.text)
        setEditingTodo(todo)
        }
    const handleSave = (e) => {
        e.preventDefault()
        console.log(editItem)
        dispatch(editTodo(editingTodo.id, text))
        setEditingTodo(false)
        setText("")
    }
 
  return (
      <div>
          <form onSubmit={hanldeSubmit}>
              <input type="text"
                  value={text}
                  name='text'
                  placeholder='ADD Todo'
                  onChange={(e)=> setText(e.target.value)}
              />
              {editingTodo ? <button type="submit" onClick={handleSave}>Save</button>: <button type="submit">ADD</button> }
              
          </form>
        
          <h1>Todo List</h1>
          {todos.map((todo) => <p key={todo.id}>{todo.text}
              <button onClick={()=>editItem(todo)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </p>)}
    </div>
  )
}

export default TodoList