import React, { useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Checkbox } from "@mui/material";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Terminar práctica React", done: false },
    { id: 2, title: "Subir proyecto a GitHub Pages", done: true },
    { id: 3, title: "Preparar documento de entrega", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Mis Tareas</Typography>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id} button onClick={() => toggleTask(task.id)}>
            <Checkbox checked={task.done} />
            <ListItemText primary={task.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};