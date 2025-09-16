import axios from 'axios';
import { clearSession } from '../redux/sessionSlice';
import { API_BASE_URL } from '@env';
import * as SecureStore from 'expo-secure-store';

const me = async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    const response = await axios.get(`${API_BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export default me;
