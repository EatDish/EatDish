import React, { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { graphqlOperation, API } from 'aws-amplify';
import { createUser } from '../../API/mutations';

const initialUserState = {
  username: '',
  password: ''
};

export default function Register({ navigation }) {
  const { colors } = useTheme();
  const [formState, setFormState] = useState(initialUserState);

  function handleInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function registerUser() {
    if (formState.password.length === 0 || formState.username.length === 0) {
      Alert.alert('username or pass is empty!', '', [
        { text: 'OK', onPress: () => console.log('ok pressed') }
      ]);
      return;
    }
    console.log('Register.js -- formState:', formState);
    const result = await API.graphql(
      graphqlOperation(createUser, {
        input: {
          username: formState.username,
          password: formState.password
        }
      })
    )
      .then(({ data }) => console.log('Register.js -- data:', data))
      .catch((err) => console.log('err:', err));
    setFormState(initialUserState);
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => handleInput('username', val)}
        value={formState.username}
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        onChangeText={(val) => handleInput('password', val)}
        value={formState.password}
        style={styles.input}
        placeholder="password"
      />
      <Button
        title="Create User"
        onPress={async () =>
          registerUser()
            .then(navigation.navigate('Login'))
            .catch((err) => console.log(err))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 }
});
