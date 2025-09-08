import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
const Menu = () => {
    const auth = useContext(AuthContext);
    return (_jsxs("nav", { className: "bg-blue-600 text-white p-4 flex flex-col sm:flex-row sm:justify-between items-center", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0", children: [_jsx(Link, { to: "/dashboard", className: "px-3 py-1 rounded hover:bg-blue-500", children: "Dashboard" }), _jsx(Link, { to: "/perfil", className: "px-3 py-1 rounded hover:bg-blue-500", children: "Perfil" }), _jsx(Link, { to: "/tasks", className: "px-3 py-1 rounded hover:bg-blue-500", children: "Tareas" }), _jsx(Link, { to: "/usuarios", className: "px-3 py-1 rounded hover:bg-blue-500", children: "Usuarios" })] }), _jsx("div", { children: auth?.user ? `Bienvenido, ${auth.user.name}` : 'No logueado' })] }));
};
export default Menu;
