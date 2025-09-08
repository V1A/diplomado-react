import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

const Menu: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row sm:justify-between items-center">
      <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
        <Link to="/dashboard" className="px-3 py-1 rounded hover:bg-blue-500">Dashboard</Link>
        <Link to="/perfil" className="px-3 py-1 rounded hover:bg-blue-500">Perfil</Link>
        <Link to="/tasks" className="px-3 py-1 rounded hover:bg-blue-500">Tareas</Link>
        <Link to="/usuarios" className="px-3 py-1 rounded hover:bg-blue-500">Usuarios</Link>
      </div>
      <div>{auth?.user ? `Bienvenido, ${auth.user.name}` : 'No logueado'}</div>
    </nav>
  );
};

export default Menu;