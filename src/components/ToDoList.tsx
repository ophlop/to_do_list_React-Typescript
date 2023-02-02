import { Todo } from "../types";
import ToDoItem from "./ToDoItem";

interface IToDoList {
    list: Todo[],
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void,
}

const ToDoList= ({ list, toggleTodo, removeTodo }: IToDoList) => {
    
    return (
        <ul style={{paddingLeft: 0}}>
            { list.map((todo) => (
                <ToDoItem key={todo.id}
                toggleTodo={ toggleTodo }
                removeTodo={ removeTodo }
                {...todo}/>
            ))}
        </ul>
    )
}

export default ToDoList;