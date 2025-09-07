import { Outlet } from 'react-router-dom';

export const PrivateLayout = () => (
  <div style={{ padding: '20px' }}>
    <h2>Área Privada</h2>
    <Outlet />
  </div>
);