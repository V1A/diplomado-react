import { useState } from "react";

interface User {
  id: number;
  name: string;
  status: "active" | "inactive";
}

const initialUsers: User[] = [
  { id: 1, name: "Juan Pérez", status: "active" },
  { id: 2, name: "María López", status: "inactive" },
  { id: 3, name: "Carlos García", status: "active" },
];

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState<"" | "active" | "inactive">("");

  const filteredUsers = users.filter((u) => {
    return (
      u.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterStatus ? u.status === filterStatus : true)
    );
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Gestión de Usuarios</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as "active" | "inactive" | "")}
        >
          <option value="">Todos</option>
          <option value="active">Activos</option>
          <option value="inactive">Inactivos</option>
        </select>
      </div>

      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No se encontraron usuarios</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};