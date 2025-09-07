import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, UserPage, NotFoundPage } from '../pages/public';
import { PerfilPage, TasksPage } from '../pages/private';
import { PrivateLayout } from '../layouts/PrivateLayout';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userRegister" element={<UserPage />} />

        {/* Rutas privadas */}
        <Route element={<PrivateLayout />}>
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Route>

        {/* Página no encontrada */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};