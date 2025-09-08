import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return _jsx(AuthContext.Provider, { value: { user, setUser }, children: children });
};
