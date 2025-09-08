import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
export const Footer = ({ message }) => {
    return (_jsx(Box, { sx: {
            bgcolor: 'grey.500',
            color: 'white',
            py: 1,
            textAlign: 'center',
            zIndex: 10
        }, children: _jsx(Typography, { variant: "body2", children: message }) }));
};
