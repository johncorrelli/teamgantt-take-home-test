import axios from "axios";

const API_URL = "http://localhost/api";

export async function getUsers() {
  const response = await axios.get(`${API_URL}/users`);
  const { data: users } = await response.data;
  return users;
}

export async function getTasks() {
  const response = await axios.get(`${API_URL}/tasks`);
  const { data: tasks } = await response.data;
  return tasks;
}

export async function createTask(task) {
  const response = await axios.post(`${API_URL}/tasks`, task);
  const { data } = await response.data;
  return data;
}

export async function updateTask(task) {
  const response = await axios.patch(`${API_URL}/tasks/${task.id}`, task);
  const { data } = await response.data;
  return data;
}

export function deleteTask(id) {
  return axios.delete(`http://localhost/api/tasks/${id}`);
}
