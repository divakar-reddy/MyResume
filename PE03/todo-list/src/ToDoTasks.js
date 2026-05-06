import React, { useState, useEffect, useReducer } from "react";
import TodoList from './ToDoList';
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};
const ToDoTasks = () => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [task, setTask] = useState("");

    useEffect(() => {
        console.log("Tasks have been updated:", tasks);
    }, [tasks]);

    const addTask = () => {
        if (task.trim() !== "") {
            dispatch({ type: 'ADD_TASK', payload: task });
            setTask(""); // Clear input field
        }
    };

    const deleteTask = (index) => {
        dispatch({ type: 'DELETE_TASK', payload: index });
    };

    return (
        <div className="container">
            <h1>ToDo List App</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter task description"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <TodoList key={index} task={task} onDelete={() => deleteTask(index)} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoTasks;