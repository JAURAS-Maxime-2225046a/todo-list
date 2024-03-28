// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import deleteTaskImg from './assets/trash-solid.svg'
import editTaskImg from './assets/pen-to-square-solid.svg'
import calendarDaysImg from './assets/calendar-days-regular.svg'
// eslint-disable-next-line no-unused-vars
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Task.css';

// eslint-disable-next-line react/prop-types
function Task({ task, deleteTask, editTask, handleCheckboxChange }) {

    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDelete = () => {
        // eslint-disable-next-line react/prop-types
        deleteTask(task.id);
    };

    const handleEdit = () => {
        // eslint-disable-next-line react/prop-types
        const newName = prompt('Nouveau nom de la tâche', task.name);
        if (newName !== null) {
            // eslint-disable-next-line react/prop-types
            editTask(task.id, newName);
        }
    };

    const handleCalendarClick = () => {
        setShowCalendar(!showCalendar); // Basculer l'état du calendrier
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Date sélectionnée :", date);
    };

    const handleCheckboxClick = (event) => {
        // eslint-disable-next-line react/prop-types
        handleCheckboxChange(task.id, event.target.checked);
    };

    return (
        // eslint-disable-next-line react/prop-types
        <li className={task.completed ? 'completed' : ''}>
            <input type="checkbox" onChange={handleCheckboxClick}/>
            {/* eslint-disable-next-line react/prop-types */}
            <span>{task.name}</span>
            <img src={deleteTaskImg} onClick={handleDelete}/>
            <img src={editTaskImg} onClick={handleEdit}/>
            <img src={calendarDaysImg} onClick={handleCalendarClick}/>
            {showCalendar && (
                <div>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div>
            )}
            <p>{selectedDate.toLocaleDateString()}</p>
        </li>

    );
}

export default Task;

