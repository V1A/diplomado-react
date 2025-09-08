import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { AlertContext } from './Alert.context';
export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, severity = 'info') => {
        setAlert({ message, severity });
    };
    const handleClose = () => {
        setAlert(null);
    };
    return (_jsxs(AlertContext.Provider, { value: { showAlert }, children: [children, alert && (_jsx(Snackbar, { open: !!alert, autoHideDuration: 3000, onClose: handleClose, anchorOrigin: { vertical: 'top', horizontal: 'right' }, children: _jsx(Alert, { severity: alert.severity, onClose: handleClose, sx: { width: '100%' }, variant: "filled", children: alert.message }) }))] }));
};
