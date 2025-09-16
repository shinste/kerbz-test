import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HomeBar from '../components/HomeBar';
import InfoBox from '../components/InfoBox';
import { clearUserSession } from '../utils/clearUserSession';
import useInactivityCheck from '../hooks/useInactivityCheck';
import me from '../api/me';

import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const lastActiveAt = useSelector((state) => state.session.lastActiveAt);

  const navigate = useNavigation();

  //  React.useEffect(() => {
  //    const fetchInformation = async () => {
  //      await me();
  //    };
  //  }, []);

  const { interact } = useInactivityCheck();

  return (
    <>
      <HomeBar user="Stephen S." />
      <SafeAreaView style={styles.homeContainer}>
        <InfoBox userID="user_12345" name="Stephen S." unreadCount={4} />
        {loading && <Text>Loading</Text>}
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={async () => {
            await clearUserSession();
            navigate.replace('Login');
          }}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactButton} onPress={interact}>
          <Text style={styles.signOutText}>Prolong Session</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
  },

  signOutButton: {
    backgroundColor: '#DC2626',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 20,
  },

  signOutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  interactButton: {
    backgroundColor: '#FFA800',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 20,
  },
});
