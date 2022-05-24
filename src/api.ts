const API_URL = 'https://mate.academy/students-api/';

export const getData = async (endpoint: string) => {
  const response = await fetch(`${API_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(`Status of error: ${response.status}`);
  }

  return response.json();
};

export const getTodos = (): Promise<Todo[]> => getData('todos');

export const getUser = (userId: number): Promise<User> => getData(`users/${userId}`);