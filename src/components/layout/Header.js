import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Avatar, Box, Button, Toolbar, Typography, } from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { useLocation } from "react-router-dom"; // 👈 Importamos hook de react-router
export const Header = ({ username, menuOptions, logout }) => {
    const location = useLocation(); // 👈 Ruta actual
    const getPageTitle = () => {
        const currentOption = menuOptions.find((option) => option.path === location.pathname);
        return currentOption?.text || "Mi App";
    };
    return (_jsx(AppBar, { position: "fixed", elevation: 2, children: _jsxs(Toolbar, { sx: { display: "flex", justifyContent: "space-between" }, children: [_jsx(Typography, { variant: "h6", children: getPageTitle() }), _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [_jsx(Avatar, { sx: { width: 32, height: 32, bgcolor: "primary.light" }, children: username?.charAt(0).toUpperCase() || "U" }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: username || "Usuario" }), _jsx(Button, { color: "inherit", onClick: logout, startIcon: _jsx(LogoutIcon, {}), children: "Salir" })] })] }) }));
};
