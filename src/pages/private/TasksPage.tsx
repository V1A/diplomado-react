import React, { useState } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type Task = { id: number; text: string; done: boolean; };

const initialTasks: Task[] = [
  { id: 1, text: 'Terminar el informe', done: false },
  { id: 2, text: 'Enviar correo a jefe', done: true },
  { id: 3, text: 'Revisar tareas de usuarios', done: false },
];

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const navigate = useNavigate();

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Tareas</h1>

      <ul className="space-y-4">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <span className={task.done ? 'line-through text-gray-400 font-medium' : 'font-medium'}>
              {task.text}
            </span>
            <button onClick={() => toggleTask(task.id)} className="text-2xl text-blue-500">
              {task.done ? <FaCheckCircle /> : <FaRegCircle />}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default TasksPage;