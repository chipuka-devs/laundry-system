import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../AxiosService';

// registration request
const register = async credentials => {
  const {name, email, phone, password, role} = credentials;

  // await AsyncStorage.s

  const response = await axios.post('/user/register', {
    name,
    email,
    phone,
    password,
    role,
  });

  // console.log(response);
  await AsyncStorage.setItem('user', JSON.stringify(response?.data));

  return response?.data;
};

// login user
const login = async credentials => {
  const {emailOrPhone, password} = credentials;

  const response = await axios.post('/user/login', {
    phone_or_email: emailOrPhone,
    password: password,
  });

  await AsyncStorage.setItem('user', JSON.stringify(response?.data));

  return response?.data;
};

// logout
const logout = async () => {
  await AsyncStorage.removeItem('user');
};

const AuthServices = {login, register, logout};

export default AuthServices;
