import React from 'react'
import {Todo} from '../types'
import './ToDoItem.css'

interface IToDoItem extends Todo{
    style?: React.CSSProperties,
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void,
}

const ToDoItem = ({ id, title, complited, toggleTodo, removeTodo, style = {}}: IToDoItem) => {
return (
    <div className="wrapper">
        <li className='ItemTD'>
                <div className='titleItem'>
                    <input type='checkbox' checked={complited} 
                        className='checkItem'
                        id='chekboxToDo' 
                        onChange={() => toggleTodo(id) }
                    />
                    <span className='textCheck'>{title}</span>
                </div>
            <span className='deleteItem' onClick={() => removeTodo(id)}>&times;</span>
        </li>
    </div>
)
}

export default ToDoItem;