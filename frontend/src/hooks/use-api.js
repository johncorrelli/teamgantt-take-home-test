import React from "react";
import * as api from "../services/api";

export default function useApi() {
  const [tasks, setTasks] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const loadUsers = React.useCallback(() => {
    api.getUsers().then(setUsers);
  }, []);

  const loadTasks = React.useCallback(() => {
    api.getTasks().then(setTasks);
  }, []);

  React.useEffect(loadUsers, []);
  React.useEffect(loadTasks, []);

  const actions = React.useMemo(
    () => ({
      createTask: (task) => api.createTask(task).then(loadTasks),
      updateTask: (task) => api.updateTask(task).then(loadTasks),
      deleteTask: (id) => api.deleteTask(id).then(loadTasks),
    }),
    [loadTasks]
  );

  return { tasks, users, actions };
}
