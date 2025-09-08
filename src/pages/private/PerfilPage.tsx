import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/Auth.context';

const PerfilPage: React.FC = () => {
  const auth = useContext(AuthContext)!;

  if (!auth.user) return <p>No hay usuario</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     <img
        src="/diplomado-react/perfil.jpg"
        alt="Perfil"
        className="w-16 h-16 rounded-full mb-2 shadow-md object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">{auth.user.name}</h1>
      <p>ID: {auth.user.id}</p>
    </div>
  );
};

export default PerfilPage;