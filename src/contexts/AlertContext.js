import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const AlertContext = createContext(undefined);
export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);
    const showAlert = (alert) => setAlert(alert);
    const clearAlert = () => setAlert(null);
    return (_jsx(AlertContext.Provider, { value: { alert, showAlert, clearAlert }, children: children }));
};
export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useAlert debe usarse dentro de un AlertProvider");
    }
    return context;
};
