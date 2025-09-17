import axios from 'axios';
import { setSession } from '../redux/sessionSlice';
import { API_BASE_URL } from '@env';
import * as SecureStore from 'expo-secure-store';

const login = async (username, password, dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email: username,
      password: password,
    });
    if (response.status === 201) {
      const { id, name, public_avatar } = response.data.user;
      console.log(id, name, public_avatar, 'extraction');
      const token = response.data.token;
      dispatch(
        setSession({
          token,
          user: { id, name, public_avatar },
        }),
      );
      await SecureStore.setItemAsync('token', token);
    }
  } catch (error) {
    const status = error.response?.status;
    if (status === 422) {
      throw new Error(
        'The email and password combination did not match any existing account',
      );
    } else {
      throw new Error(
        'There was an issue completing the login, please try again later',
      );
    }
    console.error(error.response || error);
  }
};

export default login;
