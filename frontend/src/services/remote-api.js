import axios from "axios";
import { getUsers as getUsersFake } from "./memory-api";

const API_URL = "http://localhost/api";

export async function getUsers() {
  const response = await axios.get(`${API_URL}/users`);
  return response.data.data;
}

export async function getTasks() {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data.data;
}

export async function createTask(task) {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data.data;
}

export async function updateTask(task) {
  const response = await axios.patch(`${API_URL}/tasks/${task.id}`, task);
  return response.data.data;
}

export function deleteTask(id) {
  return axios.delete(`http://localhost/api/tasks/${id}`);
}
