import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/public/LoginPage';
import DashboardPage from '../pages/private/DashboardPage';
import PerfilPage from '../pages/private/PerfilPage';
import TasksPage from '../pages/private/TasksPage';
import UsersPage from '../pages/private/UsersPage';
import { AuthContext } from '../contexts/auth/Auth.context';
const AppRouter = () => {
    const auth = React.useContext(AuthContext);
    return (_jsx(BrowserRouter, { basename: "/diplomado-react", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/dashboard", element: auth.user ? _jsx(DashboardPage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/perfil", element: auth.user ? _jsx(PerfilPage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/tasks", element: auth.user ? _jsx(TasksPage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/usuarios", element: auth.user ? _jsx(UsersPage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] }) }));
};
export default AppRouter;
