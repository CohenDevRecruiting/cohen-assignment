import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Todos from './components/Todos'
import TaskList from './components/TaskList/TaskList'
// import TaskForm from './components/TaskForm'


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Todos />} />
                    <Route path="/task-list/:id" element={<TaskList />} />
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}

export default App
