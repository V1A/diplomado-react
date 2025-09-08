import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";

export const PerfilPage = () => {
  const user = {
    name: "Via Contreras",
    email: "vi.122494@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=3" // imagen de ejemplo
  };

  return (
    <Box p={3} display="flex" flexDirection="column" alignItems="center">
      <Avatar src={user.avatar} sx={{ width: 120, height: 120, mb: 2 }} />
      <Typography variant="h5">{user.name}</Typography>
      <Typography variant="body1">{user.email}</Typography>
      <Button variant="contained" sx={{ mt: 2 }}>Editar Perfil</Button>
    </Box>
  );
};
