import { ReactNode } from "react";
type AuthContextType = {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
};
export declare const AuthProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useAuth: () => AuthContextType;
export {};
