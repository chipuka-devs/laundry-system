import axios from '../AxiosService';

// registration request
const fetchOrders = async params => {
  const response = await axios.get(`/laundry?${params}`);

  return response.data;
};

const fetchSingleOrder = async id => {
  const response = await axios.get(`/laundry${id}`);

  return response.data;
};

const OrderServices = {fetchOrders, fetchSingleOrder};

export default OrderServices;
