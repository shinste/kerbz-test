import axios from 'axios';
import { clearSession } from '../redux/sessionSlice';
import { API_BASE_URL } from '@env';
import * as SecureStore from 'expo-secure-store';
import { clearUserSession } from '../utils/clearUserSession';

const logout = async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    axios.post(`${API_BASE_URL}/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Logout API failed:', error);
  } finally {
    await clearUserSession();
  }
};
export default logout;
