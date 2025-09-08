import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/public/LoginPage';
import DashboardPage from './pages/private/DashboardPage';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(DashboardPage, {}) })] }) }));
}
export default App;
