import { useState } from 'react'
import cn from 'classnames'

import './TaskForm.scss'

export interface ITaskProps {
    taskId: number | null
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
    const taskId = task.taskId
    const isEdit = taskId !== null
    const [description, setDescription] = useState(task.description)
    const [dueDate, setDueDate] = useState(task.dueDate)
    const [priority, setPriority] = useState(task.priority)
    const [isComplete, setIsComplete] = useState(task.isComplete)
    const [error, setError] = useState('')
    const placeholder = isEdit ? 'Edit Task' : 'Add New Task'

    const saveTask = () => {
        const errMsg = 'Please select a unique name!'
        let updatedTask 

        if (isEdit) {
            updatedTask = {
                taskId: task.taskId,
                listId: task.listId,
                description: description,
                dueDate: dueDate,
                priority: priority,
                isComplete: isComplete
            }

            if (!onValidate(description, taskId)) {
                setError(errMsg)
            } else {
                onSave(updatedTask)
                setError('')
            }

        } else {
            updatedTask = {
                listId: task.listId,
                description: description,
                dueDate: dueDate,
                priority: priority,
                isComplete: isComplete
            }

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
            {!isEdit ? <h1>Add Task</h1> : null}
            <form>
                <div className="task-form__field task-form__field--desc">
                    <label htmlFor="description">Description:</label>
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
                    <label htmlFor="dueDate">Due Date:</label>
                    <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="task-form__field task-form__field--priority">
                    <label htmlFor="priority">Priority: </label>
                    <select
                        name="priority"
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="task-form__field task-form__field--complete">
                    <label htmlFor="isComplete" className="edit-visible">Is Completed:</label>
                    <input type="checkbox" name="isComplete" id="isComplete" checked={isComplete} onChange={(e) => setIsComplete(Boolean(e.target.value))}/>
                </div>
                <div className="task-form__field task-form__submit">
                    <button type="button" onClick={() => saveTask()}>Save</button>
                    <button type="button" onClick={() => onCancel()}>Cancel</button>
                </div>
                <div className="task-form__errors">
                    {error}
                </div>
            </form>
        </div>
    )
}

export default TaskForm
