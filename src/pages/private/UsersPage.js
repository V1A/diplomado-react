import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FaEdit, FaTrash, FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa';
const initialUsers = [
    { id: 1, name: 'Vianca', email: 'vianca@mail.com', password: '123456', active: true },
    { id: 2, name: 'Nelson', email: 'nelson@mail.com', password: 'abcdef', active: false },
    { id: 3, name: 'Juan', email: 'juan@mail.com', password: 'qwerty', active: true },
    { id: 4, name: 'Maria', email: 'maria@mail.com', password: 'pass123', active: true },
    { id: 5, name: 'Pedro', email: 'pedro@mail.com', password: 'xyz789', active: false },
    { id: 6, name: 'Ana', email: 'ana@mail.com', password: 'ana456', active: true },
];
const UsersPage = () => {
    const [users, setUsers] = useState(initialUsers);
    const [showPassword, setShowPassword] = useState({});
    const [page, setPage] = useState(1);
    const usersPerPage = 5;
    // Estados para editar
    const [editingUser, setEditingUser] = useState(null);
    const [editName, setEditName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    // Estados para añadir nuevo usuario
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    // Funciones
    const togglePassword = (id) => {
        setShowPassword(prev => ({ ...prev, [id]: !prev[id] }));
    };
    const deleteUser = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id));
    };
    const toggleActive = (id) => {
        setUsers(prev => prev.map(user => (user.id === id ? { ...user, active: !user.active } : user)));
    };
    const openEdit = (user) => {
        setEditingUser(user);
        setEditName(user.name);
        setEditEmail(user.email);
    };
    const saveEdit = () => {
        if (!editingUser)
            return;
        setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, name: editName, email: editEmail } : u));
        setEditingUser(null);
    };
    const addUser = () => {
        if (!newName || !newEmail || !newPassword)
            return;
        const newUser = {
            id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
            name: newName,
            email: newEmail,
            password: newPassword,
            active: true,
        };
        setUsers(prev => [...prev, newUser]);
        setNewName('');
        setNewEmail('');
        setNewPassword('');
        setShowNewPassword(false);
    };
    const sortedUsers = [...users].sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1));
    const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
    const paginatedUsers = sortedUsers.slice((page - 1) * usersPerPage, page * usersPerPage);
    return (_jsxs("div", { className: "p-6 bg-gray-100 min-h-screen", children: [_jsx("h1", { className: "text-3xl font-bold text-center mb-6", children: "Usuarios Registrados" }), _jsxs("div", { className: "flex justify-center gap-2 mb-6 flex-wrap", children: [_jsx("input", { placeholder: "Nombre", className: "p-2 border rounded", value: newName, onChange: e => setNewName(e.target.value) }), _jsx("input", { placeholder: "Email", className: "p-2 border rounded", value: newEmail, onChange: e => setNewEmail(e.target.value) }), _jsxs("div", { className: "relative", children: [_jsx("input", { placeholder: "Contrase\u00F1a", className: "p-2 border rounded w-full", type: showNewPassword ? 'text' : 'password', value: newPassword, onChange: e => setNewPassword(e.target.value) }), _jsx("button", { type: "button", onClick: () => setShowNewPassword(prev => !prev), className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600", children: showNewPassword ? _jsx(FaEyeSlash, {}) : _jsx(FaEye, {}) })] }), _jsx("button", { onClick: addUser, className: "bg-green-500 text-white p-2 rounded hover:bg-green-600", title: "A\u00F1adir Usuario", children: _jsx(FaPlus, {}) })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: paginatedUsers.map(user => (_jsxs("div", { className: "bg-white p-4 rounded-xl shadow-lg w-64 flex flex-col items-center", children: [_jsx("h2", { className: "font-bold text-xl", children: user.name }), _jsx("p", { children: user.email }), _jsxs("p", { className: "mb-2", children: ["Contrase\u00F1a: ", showPassword[user.id] ? user.password : '••••••', _jsx("button", { onClick: () => togglePassword(user.id), className: "ml-2 text-blue-500", children: showPassword[user.id] ? _jsx(FaEyeSlash, {}) : _jsx(FaEye, {}) })] }), _jsxs("p", { className: "mb-2", children: ["Estado: ", user.active ? 'Activo' : 'Inactivo'] }), _jsxs("div", { className: "flex gap-3 mt-2", children: [_jsx("button", { onClick: () => toggleActive(user.id), className: "bg-yellow-400 p-2 rounded-full hover:bg-yellow-500", title: "Activar/Desactivar", children: user.active ? 'Desactivar' : 'Activar' }), _jsx("button", { onClick: () => openEdit(user), className: "bg-blue-500 p-2 rounded-full hover:bg-blue-600", title: "Editar", children: _jsx(FaEdit, {}) }), _jsx("button", { onClick: () => deleteUser(user.id), className: "bg-red-500 p-2 rounded-full hover:bg-red-600", title: "Eliminar", children: _jsx(FaTrash, {}) })] })] }, user.id))) }), _jsxs("div", { className: "flex justify-center mt-6 gap-2", children: [_jsx("button", { disabled: page === 1, onClick: () => setPage(prev => prev - 1), className: "px-3 py-1 bg-gray-300 rounded disabled:opacity-50", children: "Anterior" }), Array.from({ length: totalPages }, (_, i) => (_jsx("button", { onClick: () => setPage(i + 1), className: `px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`, children: i + 1 }, i))), _jsx("button", { disabled: page === totalPages, onClick: () => setPage(prev => prev + 1), className: "px-3 py-1 bg-gray-300 rounded disabled:opacity-50", children: "Siguiente" })] }), editingUser && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: _jsxs("div", { className: "bg-white p-6 rounded shadow-lg w-96", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Editar Usuario" }), _jsx("input", { className: "w-full p-2 mb-2 border rounded", value: editName, onChange: e => setEditName(e.target.value) }), _jsx("input", { className: "w-full p-2 mb-2 border rounded", value: editEmail, onChange: e => setEditEmail(e.target.value) }), _jsxs("div", { className: "flex justify-end gap-2 mt-4", children: [_jsx("button", { onClick: () => setEditingUser(null), className: "px-4 py-2 bg-gray-300 rounded", children: "Cancelar" }), _jsx("button", { onClick: saveEdit, className: "px-4 py-2 bg-blue-500 text-white rounded", children: "Guardar" })] })] }) }))] }));
};
export default UsersPage;
