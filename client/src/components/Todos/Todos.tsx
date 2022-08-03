import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import cn from 'classnames'

import TaskList from '../TaskList'
import TodoForm from '../TodoForm'

import './Todos.scss'

const Todos = () => {
    const [todoList, setTodoList] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)

    const getTodos = () => {
        axios.get(`todos`)
          .then(res => {
            if (res.status === 200) {
              setTodoList(res.data)
            }
          })
    }

    useEffect(() => {
        getTodos()
    }, [])

    const deleteTodo = (listId) => {
        axios.get(`todo/delete/${listId}`)
        .then((res) => {
            console.log(res.status, res.data)
            getTodos()
    })
    }

    const isUniqueListName = (title) => {
        const matches = todoList.filter((todo) => todo.title === title)
        return matches.length === 0 ? true : false
    }

    return (
        <div className="todos">
            <h1>My Todos</h1>
            <header className='todos__header'>
                <span className='todos__heading todos__heading--title'>Title</span>
                <span className='todos__heading todos__heading--remaining'>Tasks Remaining</span>
                <span className='todos__heading todos__heading--delete'>Delete</span>
            </header>
            <ul className="todos__list">
                {todoList.map(({ id, title, tasks, numCompleted }) => (
                    <li key={id} className={cn('todos__list-item', {'todos__list-item--completed': tasks.length > 0 && tasks.length === numCompleted})}>
                        <span className="todos__col todos__col--title"><NavLink to={`/task-list/${id}`}
                            element={<TaskList />}
                            className="todos__link"
                        >{title}</NavLink>
                        </span>
                        <span className="todos__col todos__col--remaining">
                            {(tasks.length - numCompleted)}
                        </span>
                        <span className="todos__col todos__col--delete">
                            <button className="todos__btn--delete" onClick={() => deleteTodo(id)}><FaTrashAlt /></button>
                        </span>
                    </li>
                ))}
            </ul>
            {!showAddForm ? (
                <button className="todos__btn todos__btn--add" onClick={() => setShowAddForm(true)}>
                    <FaPlus />
                </button>
            ) : (
                <TodoForm onValidate={isUniqueListName} />
            )}
            
        </div>
    )
}

export default Todos
