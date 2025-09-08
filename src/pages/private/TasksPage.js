import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const initialTasks = [
    { id: 1, text: 'Terminar el informe', done: false },
    { id: 2, text: 'Enviar correo a jefe', done: true },
    { id: 3, text: 'Revisar tareas de usuarios', done: false },
];
const TasksPage = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const navigate = useNavigate();
    const toggleTask = (id) => {
        setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
    };
    return (_jsxs("div", { className: "max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg", children: [_jsx("h1", { className: "text-3xl font-bold mb-6 text-center", children: "Tareas" }), _jsx("ul", { className: "space-y-4", children: tasks.map(task => (_jsxs("li", { className: "flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition", children: [_jsx("span", { className: task.done ? 'line-through text-gray-400 font-medium' : 'font-medium', children: task.text }), _jsx("button", { onClick: () => toggleTask(task.id), className: "text-2xl text-blue-500", children: task.done ? _jsx(FaCheckCircle, {}) : _jsx(FaRegCircle, {}) })] }, task.id))) }), _jsx("div", { className: "flex justify-center mt-6", children: _jsx("button", { onClick: () => navigate('/dashboard'), className: "px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition", children: "Cerrar" }) })] }));
};
export default TasksPage;
