import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || '';

const client = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export async function loginApi({ usernameOrEmail, password }) {
  // Expected response: { accessToken, refreshToken?, user }
  const res = await client.post('/auth/login', { usernameOrEmail, password });
  return res.data;
}

export function setAuthHeader(token) {
  if (token) client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete client.defaults.headers.common['Authorization'];
}

export default client;
