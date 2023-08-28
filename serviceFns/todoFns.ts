const url = 'https://go-todo-api-production-4ec6.up.railway.app/todo/';

interface Todo {
  ID: number
  Task: string
  Completed: string
}

const getHeaders => () => {
  'Content-Type', 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`
};

export const listTodos = async (): Todo[] => {
  try {
    const res = await fetch(url + 'list', {
      method: 'GET',
      headers: getHeaders()
    });
  } catch (err) {
    console.error('Error fetching todos', err);
  }
  console.log('Fetched todos successfully');
  return await res.json().todos;
};

export const listTodo = async (index: number): Todo => {
  try {
    const res = await fetch(url + index, {
      method: 'GET',
      headers: getHeaders()
    });
  } catch (err) {
    console.error('Error fetching todo', err);
  }
  console.log('Fetched todo successfully');
  return await res.json().todo;
};

export const createTodo = async (task: string): Todo => {
  try {
    const res = await fetch(url + `create`, {
      method: 'POST',
      headers: getHeaders(),
      body: `{'Task': '${task}'}`
    });
  } catch (err) {
    console.error('Error creating todo', err);
  }
  console.log('Created todo successfully');
  return await res.json().todo;
};

export const updateTodo = async (index: number, task: string): Todo => {
  try {
    const res = await fetch(url + index, {
      method: 'PATCH',
      headers: getHeaders(),
      body: `{'Task': '${task}'}`
    });
  } catch (err) {
    console.error('Error updating todo', err);
  }
  console.log('Updated todo successfully');
  return await res.json().todo;
};

export const checkTodo = async (index: number, completed: boolean): Todo => {
  try {
    const res = await fetch(url + index, {
      method: 'PATCH',
      headers: getHeaders(),
      body: `{'Completed': ${!completed}}`
    });
  } catch (err) {
    console.error('Error checking todo', err);
  }
  console.log('Checked todo successfully');
  return await res.json().todo;
};

export const deleteTodo = async (index: number) => {
  try {
    const res = await fetch(url + index, {
      method: 'DELETE',
      headers: getHeaders()
    });
  } catch (err) {
    console.error('Error deleting todo', err);
  }
  console.log('Deleted todo successfully');
};
