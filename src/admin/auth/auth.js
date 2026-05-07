const AUTH_KEY = 'yipi_admin_auth_v1';

export function getAdminAuth() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setAdminAuth(auth) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

export function clearAdminAuth() {
  localStorage.removeItem(AUTH_KEY);
}

