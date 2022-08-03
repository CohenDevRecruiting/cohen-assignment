import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaPen, FaPlus, FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'
import cn from 'classnames'

import TaskForm, { ITaskProps } from '../TaskForm'

import './TaskList.scss'

const TaskList = () => {
    // id of the todo list
    const { id } = useParams()
    // number version of id
    const listId = Number(id)
    const [title, setTitle] = useState('')
    const [tasks, setTasks] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)
    // won't display edit form if set to -1
    const [editingTask, setEditingTask] = useState(-1)

    const newTask: ITaskProps = {
        taskId: null,
        listId,
        description: '',
        dueDate: '',
        priority: 'low',
        isComplete: false,
    }

    const getTasks = () => {
        axios.get(`todo/${id}`).then((res) => {
            if (res.status === 200) {
                const data = res.data[0]
                setTitle(data.title)
                setTasks(data.tasks)
            }
        })
    }

    // fetch tasks for todo list on load
    useEffect(() => {
        getTasks()
    }, [])

    const addTask = (task) => {
        axios.post(`task/add/${listId}`, task).then((res) => {
            getTasks()
            setShowAddForm(false)
        })
    }

    const editTask = (task) => {
        axios.post(`task/edit/${task.taskId}`, task).then((res) => {
            setEditingTask(-1)
        })
    }

    const deleteTask = (taskId) => {
        axios.get(`task/delete/${taskId}`).then((res) => {
            getTasks()
        })
    }

    const cancelTask = () => {
        setEditingTask(-1)
        setShowAddForm(false)
    }

    // find if existing task has same name
    const isUniqueTaskName = (taskName) => {
        const matches = tasks.filter((t) => t.description === taskName)
        return matches.length === 0 ? true : false
    }

    // edited form should validate if name hasn't changed
    const isUniqueEditedTaskName = (taskName, taskId) => {
        const otherTasks = tasks.filter((t) => t.taskId !== taskId)
        const matches = otherTasks.filter((t) => t.description === taskName)
        return matches.length === 0 ? true : false
    }

    return (
        <div className="task-list">
            <h1>{title}</h1>
            <header className="task-list__header">
                <span className="task-list__heading task-list__heading--desc">
                    Description
                </span>
                <span className="task-list__heading task-list__heading__due">
                    Due Date
                </span>
                <span className="task-list__heading task-list__heading--priority">
                    Priority
                </span>
                <span className="task-list__heading task-list__heading--edit">
                    Edit
                </span>
                <span className="task-list__heading task-list__heading--delete">
                    Delete
                </span>
            </header>
            <ul className="task-list__list">
                {tasks.length > 0 ? (
                    tasks.map((task: ITaskProps) => (
                        <li
                            key={task.description}
                            className={cn('task-list__list-item', {
                                'task-list__list-item--completed':
                                    task.isComplete,
                            })}
                        >
                            {editingTask !== task.taskId ? (
                                <>
                                    <span className="task-list__col task-list__col--desc">
                                        {task.description}
                                    </span>
                                    <span className="task-list__col task-list__col--due">
                                        {task.dueDate}
                                    </span>
                                    <span className="task-list__col task-list__col--priority">
                                        {task.priority}
                                    </span>
                                    <span className="task-list__col task-list__col--edit">
                                        {!task.isComplete ? (
                                            <button
                                                type="button"
                                                className="task-list__btn task-list__btn--edit"
                                                onClick={() =>
                                                    setEditingTask(task.taskId)
                                                }
                                            >
                                                <FaPen />
                                            </button>
                                        ) : (
                                            '\u00A0'
                                        )}
                                    </span>
                                    <span className="task-list__col task-list__col--delete">
                                        <button
                                            type="button"
                                            className="task-list__btn task-list__btn--delete"
                                            onClick={() =>
                                                deleteTask(task.taskId)
                                            }
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </span>
                                </>
                            ) : (
                                <TaskForm
                                    task={task}
                                    onCancel={cancelTask}
                                    onValidate={isUniqueEditedTaskName}
                                    onSave={editTask}
                                />
                            )}
                        </li>
                    ))
                ) : (
                    <p>No tasks added yet.</p>
                )}
            </ul>
            <div className="task-list__controls">
                {!showAddForm ? (
                    <button
                        className="task-btn task-btn__add"
                        onClick={() => setShowAddForm(true)}
                    >
                        <FaPlus />
                    </button>
                ) : (
                    <TaskForm
                        task={newTask}
                        onCancel={cancelTask}
                        onValidate={isUniqueTaskName}
                        onSave={addTask}
                    />
                )}
            </div>
        </div>
    )
}
export default TaskList
