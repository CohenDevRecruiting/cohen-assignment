import { useState } from 'react'
import cn from 'classnames'
import moment from 'moment'

import './TaskForm.scss'

export interface ITaskProps {
    taskId?: number | null
    listId: number
    description: string
    dueDate: string
    priority: string
    isComplete: boolean
}

export interface ITaskFormProps {
    task: ITaskProps
    onCancel: () => void
    onSave: (task: ITaskProps) => void
    onValidate: (name: string, taskId?: number) => boolean
}

const TaskForm = ({
    task,
    onCancel,
    onSave,
    onValidate,
}: ITaskFormProps) => {
    const isEdit = task.taskId !== null

    const [description, setDescription] = useState(task.description)
    const [dueDate, setDueDate] = useState(task.dueDate)
    const [priority, setPriority] = useState(task.priority)
    const [isComplete, setIsComplete] = useState(task.isComplete)
    const [error, setError] = useState('')
    const placeholder = isEdit ? 'Edit Task' : 'Add New Task'
    

    const handleCompleteCheck = (e) => {
        setIsComplete(e.target.checked ? true : false)
    }

    const saveTask = () => {
        const errMsg = 'Please select a unique name!'
        let updatedTask: ITaskProps = {
            listId: task.listId,
            description,
            dueDate,
            priority,
            isComplete
        } 

        if (isEdit) {
            updatedTask = {
                taskId: task.taskId,
                ...updatedTask
            }

            if (!onValidate(description, task.taskId)) {
                setError(errMsg)
            } else {
                onSave(updatedTask)
                setError('')
            }

        } else { 
            if (!onValidate(description)) {
                setError(errMsg)
            } else {
                onSave(updatedTask)
                setError('')
            }
        }
    }

    return (
        <div className={cn('task-form', { 'task-form--edit' : isEdit })}>
            {!isEdit ? <h2>Add Task</h2> : null}
            <form className="task-form__form">
                <div className="task-form__field task-form__field--desc">
                    <label className="task-form__label" htmlFor="description">Description:</label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="task-form__field task-form__field--due">
                    <label className="task-form__label" htmlFor="dueDate">Due Date:</label>
                    <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="task-form__field task-form__field--priority">
                    <label className="task-form__label" htmlFor="priority">Priority: </label>
                    <select
                        name="priority"
                        id="priority"
                        value={priority}
                        onChange={(e) => {
                            setPriority(e.target.value)
                        }}
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="task-form__field task-form__field--complete">
                    <label htmlFor="isComplete" className="task-form__label visible-on-edit">Completed:</label>
                    <input type="checkbox" name="isComplete" id="isComplete" checked={isComplete} onChange={(e) => handleCompleteCheck(e)}/>
                </div>
                <div className="task-form__field task-form__submit">
                    <button type="button" className="task-form__btn" onClick={() => saveTask()}>Save</button>
                    <button type="button" className="task-form__btn" onClick={() => onCancel()}>Cancel</button>
                </div>
                <div className="task-form__errors">
                    {error}
                </div>
            </form>
        </div>
    )
}

export default TaskForm
