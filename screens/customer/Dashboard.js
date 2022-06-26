import {Text, VStack, ScrollView} from 'native-base';
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
    <ScrollView>
      {/* Header */}
      <Header>
        <Text fontSize={'xs'} color={'gray.500'}>
          Hey {user?.name}
        </Text>
        <Text fontWeight={600} color={'primaryDark'} fontSize={'lg'}>
          Welcome Back!
        </Text>
      </Header>

      <VStack bg={'gray.200'} height={'full'} safeArea p={3} space={6}>
        {/* Services offered */}
        <Services />

        {/* Discount card */}
        <Discount />

        {/* How app works */}
        <HowAppWorks />
      </VStack>
    </ScrollView>
  );
};

export default Dashboard;
