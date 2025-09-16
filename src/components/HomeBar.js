import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeBar = ({ user }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.homeBar}>
        {/* Temporary picture div until I can get ME data */}
        <View style={styles.temporary} />
        <View>
          <Text style={styles.userText}>
            {user.length > 15 ? `${user.slice(0, 12)}...` : user}
          </Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeBar;

const styles = StyleSheet.create({
  homeBar: {
    width: '100%',
    backgroundColor: '#1A1A1A',
    flexDirection: 'row',
    paddingBottom: 15,
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: '#1A1A1A',
  },
  userText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 14,
    color: '#A8BAC1',
    fontWeight: '600',
  },
  temporary: {
    backgroundColor: '#A8BAC1',
    borderRadius: 27.5,
    height: 55,
    width: 55,
    marginHorizontal: 10,
  },
});
