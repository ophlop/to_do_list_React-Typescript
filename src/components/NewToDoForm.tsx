import React, {useRef} from "react";
import './NewToDoForm.css'


interface NewTodoFormProps {
    handleClick: (text: string) => void
}

const NewTodoForm = ({handleClick}: NewTodoFormProps) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClick = () => {
        if (inputRef.current) {
            handleClick(inputRef.current.value)
            inputRef.current.value = '';
        }
    }

    return (
        <div className="container">
            <input className="inWork" 
                type="text"
                placeholder='new todo'
                ref={inputRef}
            />
            <button onClick={onClick} className='btnForm'>Add</button>
        </div>
    )
};

export default NewTodoForm;