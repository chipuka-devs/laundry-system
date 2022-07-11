import axios, {setAuthToken} from '../AxiosService';

// registration request
const fetchActiveOrders = async () => {
  await setAuthToken(axios);

  const response = await axios.get(
    `/order?type=exclude&search=cancelled&search=complete`,
  );

  return response.data;
};

// fetch active orders: (status != cancelled,complete)
const fetchOrderItems = async params => {
  const response = await axios.get(`/laundry?${params}`);

  return response.data;
};

const fetchSingleOrder = async id => {
  const response = await axios.get(`/laundry${id}`);

  return response.data;
};

const saveBucket = async order => {
  await setAuthToken(axios);

  const {data} = await axios.post('/order', {...order});

  return data;
};

const updateOrder = async (id, d) => {
  await setAuthToken(axios);

  const {data} = await axios.patch(`/order/${id}`, d);

  return data;
};

const OrderServices = {
  fetchOrderItems,
  fetchSingleOrder,
  saveBucket,
  updateOrder,
  fetchActiveOrders,
};

export default OrderServices;
