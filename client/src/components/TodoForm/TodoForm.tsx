import { useState } from 'react'
import axios from 'axios'

import './TodoForm.scss'

export interface ITodoFormProps {
    onCancel: () => void
    onValidate: (title: string) => boolean
}

const TodoForm = ({ onCancel, onValidate }: ITodoFormProps) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const addTodoList = () => {
        if (onValidate(title)) {
            const params = { title }
            axios.post('todo', params).then((response) => console.log(response))
        } else {
            setError('Please select a unique name!')
        }
    }

    return (
        <form className="todo-form">
            <input
                type="text"
                placeholder="Add a todo list"
                value={title}
                className="todo-input"
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className="todo-form__btn todo-form__btn--add" onClick={addTodoList}>
                Add
            </button>
            <button className="todo-form__btn todo-form__btn--cancel" onClick={onCancel}>
                Cancel
            </button>
            <div className="todo-form__error">{error}</div>
        </form>
    )
}

export default TodoForm
