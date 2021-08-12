const API_URL = 'http://localhost:4000';

export const fetchTasks = async (n) => {
  const response = await fetch(`${API_URL}/tasks${n ? '/'+n : ''}`);
  const data = await response.json();

  return data.tasks;
};

export const completeTask = async (n) => {
  const response = await fetch(`${API_URL}/tasks/${n}`, { method: 'PUT' });
  await response.json();
};