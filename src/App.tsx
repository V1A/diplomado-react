import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/public/LoginPage';
import DashboardPage from './pages/private/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
