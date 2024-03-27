// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import addTaskImg from "./assets/plus-solid.svg";
//import Calendar from "react-calendar";
//import 'react-calendar/dist/Calendar.css';

// eslint-disable-next-line react/prop-types
function TaskForm({ addTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            const newTask = {
                id: Date.now(),
                name: inputValue
            };
            addTask(newTask);
            setInputValue('');
        }
    };

    return (
        <form>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ajouter une nouvelle tâche"
            />
            <img src={addTaskImg} onClick={handleSubmit}/>
        </form>
    );
}

export default TaskForm;

