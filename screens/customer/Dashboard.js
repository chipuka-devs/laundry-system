import {Text, VStack, ScrollView, Box} from 'native-base';
import React, {useEffect} from 'react';
import Header from '../../components/dashboard/DashboardHeader';
import HowAppWorks from '../../components/dashboard/HowAppWorks';
import Services from '../../components/dashboard/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOrders} from '../../services/redux/reducers/OrderSlice';
import {setBucket} from '../../services/redux/reducers/BucketSlice';
import ActiveOrders from '../../components/dashboard/ActiveOrders';
import OrderServices from '../../services/server/OrderServices';
import {useState} from 'react';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [activeOrders, setActiveOrders] = useState([]);

  // fetch active orders
  const fetchActiveOrders = () => {
    OrderServices.fetchActiveOrders()
      .then(response => setActiveOrders(response))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const getOrders = async () => {
      dispatch(fetchOrders());
    };

    const getStore = async () => {
      const cart = await AsyncStorage.getItem('bucket');

      dispatch(setBucket(JSON.parse(cart) || []));

      // console.log('bucekt', JSON.parse(cart));
    };

    getOrders();
    getStore();
    fetchActiveOrders();
  }, []);

  const {user} = useSelector(state => state?.auth);
  return (
    <Box>
      {/* Header */}
      <Header>
        <Text fontSize={'xs'} color={'gray.100'}>
          Hey {user?.name}
        </Text>
        <Text fontWeight={600} color={'white'} fontSize={'lg'}>
          Welcome Back!
        </Text>
      </Header>

      <HowAppWorks />

      {/* <ScrollView> */}
      <VStack bg={'muted.100'} height={'full'} safeArea p={3} space={6}>
        {/* Services offered */}
        {/* How app works */}

        <Box mt={'12'}>
          <Services />

          {/* Discount card */}
          {/* <Active Orders /> */}
          <ActiveOrders orders={activeOrders} />
        </Box>
      </VStack>
      {/* </ScrollView> */}
    </Box>
  );
};

export default Dashboard;
