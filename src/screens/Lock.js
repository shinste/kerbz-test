import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lock = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lockContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.lockHeader}>Session Locked</Text>
        <Text style={styles.lockText}>
          Your session has been locked due to inactivity. Tap the button below
          to continue.
        </Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.buttonText}>Continue Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lock;

const styles = StyleSheet.create({
  lockContainer: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },

  lockHeader: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  lockText: {
    fontSize: 16,
    color: '#A8BAC1',
    textAlign: 'center',
  },

  continueButton: {
    width: '100%',
    paddingVertical: 12,
    marginTop: 50,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FFA800',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

