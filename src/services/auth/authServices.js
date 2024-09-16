import axios from 'axios';

async function loginService(email, password) {
  return await axios.post('/api/auth/login', { email, password });
}

export default {loginService};