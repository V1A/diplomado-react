import { ReactNode } from "react";
type Alert = {
    message: string;
    type: "success" | "error" | "info";
};
type AlertContextType = {
    alert: Alert | null;
    showAlert: (alert: Alert) => void;
    clearAlert: () => void;
};
export declare const AlertProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useAlert: () => AlertContextType;
export {};
