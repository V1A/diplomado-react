import { AuthProvider, AlertProvider } from "./contexts";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  return (
    <AuthProvider>
      <AlertProvider>
        <AppRouter />
      </AlertProvider>
    </AuthProvider>
  );
};