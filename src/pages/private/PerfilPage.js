import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/Auth.context';
const PerfilPage = () => {
    const auth = useContext(AuthContext);
    if (!auth.user)
        return _jsx("p", { children: "No hay usuario" });
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100", children: [_jsx("img", { src: "/diplomado-react/perfil.jpg", alt: "Perfil", className: "w-16 h-16 rounded-full mb-2 shadow-md object-cover" }), _jsx("h1", { className: "text-3xl font-bold mb-2", children: auth.user.name }), _jsxs("p", { children: ["ID: ", auth.user.id] })] }));
};
export default PerfilPage;
