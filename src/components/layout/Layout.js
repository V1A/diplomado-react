import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Menu from './Menu';
const Layout = ({ children }) => (_jsxs("div", { className: "min-h-screen flex flex-col bg-gray-100", children: [_jsx(Menu, {}), _jsx("main", { className: "flex-1 p-6", children: children })] }));
export default Layout;
