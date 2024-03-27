import { useState } from 'react'
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css'

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const editTask = (taskId, newName) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, name: newName } : task
        ));
    };

    return (
        <div>
            <h1>Ma Todo-List</h1>
            <TaskForm addTask={addTask} />
            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

