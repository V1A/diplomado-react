import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaTasks, FaUsers } from 'react-icons/fa';
const DashboardPage = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6", children: [_jsx("h1", { className: "text-4xl font-bold mb-6", children: "Dashboard" }), _jsxs("div", { className: "flex gap-6", children: [_jsxs("button", { onClick: () => navigate('/perfil'), className: "flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:bg-blue-100 transition", children: [_jsx(FaUser, { size: 40 }), "Perfil"] }), _jsxs("button", { onClick: () => navigate('/tasks'), className: "flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:bg-blue-100 transition", children: [_jsx(FaTasks, { size: 40 }), "Tareas"] }), _jsxs("button", { onClick: () => navigate('/usuarios'), className: "flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:bg-blue-100 transition", children: [_jsx(FaUsers, { size: 40 }), "Usuarios"] })] })] }));
};
export default DashboardPage;
