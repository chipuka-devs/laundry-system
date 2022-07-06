import {Text, VStack, ScrollView, Box} from 'native-base';
import React, {useEffect} from 'react';
import Discount from '../../components/dashboard/Discount';
import Header from '../../components/dashboard/DashboardHeader';
import HowAppWorks from '../../components/dashboard/HowAppWorks';
import Services from '../../components/dashboard/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOrders} from '../../services/redux/reducers/OrderSlice';
import {setBucket} from '../../services/redux/reducers/BucketSlice';
import ActiveOrders from '../../components/dashboard/ActiveOrders';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {bucket} = useSelector(state => state.bucket);

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
  }, []);

  const {user} = useSelector(state => state?.auth);
  return (
    <>
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
      <ScrollView>
        <VStack bg={'gray.200'} height={'full'} safeArea p={3} space={6}>
          {/* Services offered */}
          {/* How app works */}

          <Box mt={'12'}>
            <Services />

            {/* Discount card */}
            {/* <Active Orders /> */}
            <ActiveOrders />
          </Box>
        </VStack>
      </ScrollView>
    </>
  );
};

export default Dashboard;
