import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/public/LoginPage';
import DashboardPage from '../pages/private/DashboardPage';
import PerfilPage from '../pages/private/PerfilPage';
import TasksPage from '../pages/private/TasksPage';
import UsersPage from '../pages/private/UsersPage';
import { AuthContext } from '../contexts/auth/Auth.context';

const AppRouter: React.FC = () => {
  const auth = React.useContext(AuthContext)!;

  return (
    <BrowserRouter basename="/diplomado-react">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={auth.user ? <DashboardPage /> : <Navigate to="/" />} />
        <Route path="/perfil" element={auth.user ? <PerfilPage /> : <Navigate to="/" />} />
        <Route path="/tasks" element={auth.user ? <TasksPage /> : <Navigate to="/" />} />
        <Route path="/usuarios" element={auth.user ? <UsersPage /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;