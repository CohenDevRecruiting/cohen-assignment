const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

let todos = [
    {
        id: 1,
        title: 'Cohen Interview Assignment',
    },
]

let tasks = []

const PORT = process.env.PORT || 3000

function getTodosWTasks() {
    const todosWithTasks = todos.map((todo) => {
        const todoTasks = tasks.filter((task) => task.listId === todo.id)
        const numCompletedTasks = todoTasks.filter(
            (todoTask) => todoTask.isComplete === true
        ).length

        todo.numCompleted = numCompletedTasks

        return { ...todo, tasks: todoTasks }
    })
    return todosWithTasks
}

function getTodoById(_id) {
    const todos = getTodosWTasks()
    const todo = todos.filter((todo) => todo.id === parseInt(_id))
    return todo
}

function createId() {
    return Math.floor(Math.random() * 1000)
}

// gets full list of todos
app.get('/todos', (req, res) => {
    const todosWTasks = getTodosWTasks()
    return res.status(200).send(todosWTasks)
})

// gets a todo
app.get('/todo/:id', (req, res) => {
    const todo = getTodoById(req.params.id)
    return res.status(200).send(todo)
})

// adds a todo
app.post('/todo', (req, res) => {
    const title = req.body.title
    const newTodo = {
        id: createId(),
        title,
    }

    todos.push(newTodo)
    return res.status(200).send(todos)
})

app.get('/todo/delete/:listId', (req, res) => {
    const listId = req.params.listId
    todos = todos.filter((todo) => todo.id !== parseInt(listId))
    tasks = tasks.filter((task) => task.listId !== parseInt(listId))
    return res.status(200).send(todos)
})

app.post('/task/add/:listId', (req, res) => {
    const newTask = {
        taskId: createId(),
        listId: parseInt(req.params.listId),
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        isComplete: req.body.isComplete,
    }
    tasks.push(newTask)
    return res.status(200).send(tasks)
})

app.post('/task/edit/:taskId', (req, res) => {
    const editedTask = {
        taskId: parseInt(req.params.taskId),
        listId: parseInt(req.body.listId),
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        isComplete: req.body.isComplete,
    }
    tasks = tasks.map((task) => {
        if (task.listId === listId && task.taskId === taskId) {
            return editedTask
        }
        return task
    })
    return res.status(200).send(tasks)
})

app.get('/task/delete/:taskId', (req, res) => {
    const taskId = req.params.taskId
    tasks = tasks.filter((task) => task.taskId !== parseInt(taskId))
    return res.status(200).send(tasks)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
