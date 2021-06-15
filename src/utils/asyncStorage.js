import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    console.log('asyncStorage.js -- Store User error:', e);
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('asyncStorage.js -- Get User error:', e);
  }
};
