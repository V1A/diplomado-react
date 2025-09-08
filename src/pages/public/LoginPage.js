import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth/Auth.context';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useContext(AuthContext); // ! asegura que no es null
    const navigate = useNavigate();
    const handleLogin = () => {
        if (username && password) {
            auth.setUser({ id: 1, name: username }); // ✅ Ya no dará error
            navigate('/dashboard');
        }
        else {
            alert('Ingrese usuario y contraseña');
        }
    };
    return (_jsx("div", { className: "flex items-center justify-center h-screen bg-gray-100", children: _jsxs("div", { className: "bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm", children: [_jsx("h1", { className: "text-3xl font-bold mb-6 text-center", children: "Iniciar Sesi\u00F3n" }), _jsxs("div", { className: "mb-4", children: [_jsxs("label", { className: "flex items-center gap-2 mb-1 font-medium", children: [_jsx(FaUserAlt, {}), " Usuario"] }), _jsx("input", { type: "text", value: username, onChange: e => setUsername(e.target.value), className: "w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("label", { className: "flex items-center gap-2 mb-1 font-medium", children: [_jsx(FaLock, {}), " Contrase\u00F1a"] }), _jsx("input", { type: "password", value: password, onChange: e => setPassword(e.target.value), className: "w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" })] }), _jsx("button", { onClick: handleLogin, className: "w-full p-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition", children: "Entrar" })] }) }));
};
export default LoginPage;
