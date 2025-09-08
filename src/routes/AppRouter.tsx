import { HashRouter, Routes, Route } from "react-router-dom";
import { LoginPage, NotFoundPage } from "../pages/public";
import { PerfilPage, TasksPage } from "../pages/private";
import { UsersPage } from "../pages/private/UsersPage";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas privadas */}
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/users" element={<UsersPage />} />

        {/* Ruta por defecto */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};