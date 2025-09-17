import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { store } from '../redux/store';
import { clearSession } from '../redux/sessionSlice';

export const clearUserSession = async () => {
  store.dispatch(clearSession());
  await SecureStore.deleteItemAsync('token');
};
