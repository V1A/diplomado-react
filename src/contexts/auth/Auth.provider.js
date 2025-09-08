import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { AuthContext } from './Auth.context';
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (_jsx(AuthContext.Provider, { value: { user, setUser }, children: children }));
};
