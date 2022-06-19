import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from './globals';

const AxiosUtility = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = async instance => {
  const {token} = await JSON.parse(await AsyncStorage?.getItem('user'));

  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

export default AxiosUtility;
