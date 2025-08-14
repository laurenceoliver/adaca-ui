import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [selectedProject, setSelectedProject] = useState('');
    const [tasks, setTasks] = useState([]);
    const [developers, setDevelopers] = useState([]);

    const value = {
        selectedProject,
        setSelectedProject,
        tasks,
        setTasks,
        developers,
        setDevelopers,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => useContext(TaskContext);