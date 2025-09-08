import type { AlertColor } from '@mui/material';
export interface AlertType {
    message: string;
    severity?: AlertColor;
}
interface AlertContextType {
    showAlert: (message: string, severity?: AlertColor) => void;
}
export declare const AlertContext: import("react").Context<AlertContextType | null>;
export {};
