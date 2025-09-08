import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaTasks, FaUsers } from 'react-icons/fa';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="flex gap-6">
        <button
          onClick={() => navigate('/perfil')}
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:bg-blue-100 transition"
        >
          <FaUser size={40} />
          Perfil
        </button>
        <button
          onClick={() => navigate('/tasks')}
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:bg-blue-100 transition"
        >
          <FaTasks size={40} />
          Tareas
        </button>
        <button
          onClick={() => navigate('/usuarios')}
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:bg-blue-100 transition"
        >
          <FaUsers size={40} />
          Usuarios
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;