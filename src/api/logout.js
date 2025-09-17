import axios from 'axios';
import { clearSession } from '../redux/sessionSlice';
import { API_BASE_URL } from '@env';
import * as SecureStore from 'expo-secure-store';
import { clearUserSession } from '../utils/clearUserSession';
import { navigationRef } from '../navigation/RootNavigation';

const logout = async (user = true) => {
  if (user) {
    clearUserSession();
  } else {
    try {
      const token = await SecureStore.getItemAsync('token');
      await axios.post(`${API_BASE_URL}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      alert('Session no longer active, please login again');
      if (error.status === 401 || error.status === 403) {
        navigationRef.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    } finally {
      await clearUserSession();
    }
  }
};
export default logout;
