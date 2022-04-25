import React from "react";
import * as api from "../services/api";

/**
 * A minimal state management and remote persistence abstraction.
 * Used to access tasks and users, and create/update/delete tasks.
 * Changes are persisted to the API, and local tasks and users
 * are kept up-to-date. Think of it like poor-man's redux.
 */
export default function useApi() {
  const [tasks, setTasks] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const loadUsers = React.useCallback(() => {
    api.getUsers().then(setUsers);
  }, []);

  const loadTasks = React.useCallback(() => {
    api.getTasks().then(setTasks);
  }, []);

  React.useEffect(loadUsers, [loadUsers]);
  React.useEffect(loadTasks, [loadTasks]);

  const actions = React.useMemo(
    () => ({
      createTask: (task) => api.createTask(task).then(loadTasks),
      updateTask: (task) => api.updateTask(task).then(loadTasks),
      deleteTask: (id) => api.deleteTask(id).then(loadTasks),
    }),
    []
  );

  return {
    tasks,
    users,
    ...actions,
  };
}
