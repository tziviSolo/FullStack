import axios from 'axios';

const instance = axios.create(
  { baseURL: process.env.REACT_APP_API }
);

instance.interceptors.response.use(
  response => response,
  error => console.error(error)
);

export default {
  getTasks: async () => {
    const result = await instance.get(`/items`);
    return result.data;
  },

  addTask: async (name) => {
    const newTask = await instance.post(`/item`, { name });
    return newTask.data;
  },

  setCompleted: async (id, isComplete) => {
    const task = await instance.put(`/item/${id}`, { id, name: "", isComplete });
    return task.data;
  },

  deleteTask: async (id) => {
    await instance.delete(`/item/${id}`);
  }
};
