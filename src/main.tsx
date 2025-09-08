import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { AuthProvider, AlertProvider } from "./contexts";
import { AppRouter } from "./routes/AppRouter";

const theme = createTheme({ /* tu tema */ });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AlertProvider>
          <CssBaseline />
          <AppRouter />
        </AlertProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);