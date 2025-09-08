import { jsx as _jsx } from "react/jsx-runtime";
// src/routes/PublicRouter.tsx
import { Outlet, Navigate } from 'react-router-dom';
export const PublicRoute = () => {
    // Aquí podrías verificar si el usuario está logueado
    const isAuthenticated = false; // para la práctica mínima, déjalo en false
    return !isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/perfil" });
};
