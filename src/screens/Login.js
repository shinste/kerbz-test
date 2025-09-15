import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import login from '../api/login';
import { StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.loginContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.text}> Sign in to continue </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter Email"
        />
        <Text style={styles.formLabel}>Password</Text>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={[
            styles.button,
            {
              opacity:
                loading || !username.trim() || !password.trim() ? 0.2 : 1,
            },
          ]}
          disabled={loading || !username.trim() || !password.trim()}
          onPress={async () => {
            setLoading(true);
            try {
              await login(username, password, dispatch);
            } catch (error) {
              alert(error.message);
            } finally {
              setLoading(false);
            }
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '10%',
    backgroundColor: '#0F0F0F',
  },

  formContainer: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: '#1A1A1A',
  },

  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFD',
  },

  text: {
    color: '#BDBDBD',
    fontWeight: 'semibold',
  },

  formLabel: {
    width: '100%',
    marginLeft: 5,
    marginBottom: 2,
    color: '#FAF9F6',
    fontWeight: '400',
  },

  input: {
    width: '100%',
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#E8F0FE',
    fontSize: 14,
  },

  button: {
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
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
