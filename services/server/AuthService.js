import axios from '../AxiosService';

// registration request
const register = async credentials => {
  const {name, email, phone, password, role} = credentials;

  const response = await axios.post('/user/register', {
    name,
    email,
    phone,
    password,
    role,
  });

  return response;
};

// login user
const login = async credentials => {
  const {emailOrPhone, password} = credentials;

  const response = await axios.post('/user/login', {
    phone_or_email: emailOrPhone,
    password,
  });

  return response;
};

const services = {login, register};

export default services;
