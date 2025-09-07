import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRouter } from './routes/AppRouter.tsx';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AlertProvider, AuthProvider } from './contexts/index.ts';
import { BrowserRouter } from 'react-router-dom';

// Definir tema de MUI
const theme = createTheme({
  palette: {
    primary: { main: '#556cd6' },
    secondary: { main: '#19857b' },
  },
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
});

// Montar la app en el DOM
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/diplomado-react">
        <AuthProvider>
          <AlertProvider>
            <AppRouter />
            <CssBaseline />
          </AlertProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);