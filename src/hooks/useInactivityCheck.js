import React from 'react';
import { AppState } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateLastActive } from '../redux/sessionSlice';
import { useNavigation } from '@react-navigation/native';

const INACTIVITY_LIMIT = 5 * 60 * 1000;

const useInactivityCheck = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const lastActiveAt = useSelector((state) => state.session.lastActiveAt);

  React.useEffect(() => {
    const handleForeground = (nextState) => {
      if (nextState === 'active') {
        const now = Date.now();
        const inactiveTime = now - lastActiveAt;
        if (inactiveTime > INACTIVITY_LIMIT) {
          navigation.replace('Lock');
        } else {
          dispatch(updateLastActive(now));
        }
      }
    };

    const subscription = AppState.addEventListener('change', handleForeground);

    return () => subscription.remove();
  }, [lastActiveAt, dispatch, navigation]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (lastActiveAt && Date.now() - lastActiveAt > INACTIVITY_LIMIT) {
        navigation.replace('Lock');
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [lastActiveAt, navigation]);

  const interact = () => {
    dispatch(updateLastActive(Date.now()));
  };

  return { interact };
};

export default useInactivityCheck;
