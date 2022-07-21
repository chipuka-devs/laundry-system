import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import OrderServices from '../../services/server/OrderServices';
import {useState} from 'react';
import Loader from '../../components/LoaderCard';

const History = ({}) => {
  const navigation = useNavigation();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // fetch all orders
    const fetchAllOrders = () => {
      OrderServices.fetchActiveOrders()
        .then(r => {
          setOrders(r);
          console.log(r);
          setLoading(false);
        })
        .catch(err => {
          console.log(err.message);

          setLoading(false);
        });
    };

    fetchAllOrders();
  }, []);

  return (
    <Box>
      {loading && <Loader />}
      {/* Header */}
      <Header handleBack={() => navigation.goBack()} title={'My Orders'} />

      <ScrollView bg="white" py={2} px={3}>
        {/* list */}
        <VStack space={3} mb={'70px'}>
          {orders?.map(order => (
            <OrderItem key={order._id} order={order} />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default History;

const OrderItem = ({order}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('OrderStatus')}>
      <VStack
        borderRadius={5}
        justifyContent={'center'}
        space={3}
        bg={'blueGray.100'}
        py={3}>
        <Box
          p={1}
          borderBottomWidth={1}
          borderBottomColor="blueGray.500"
          _text={{fontSize: 'sm', fontWeight: 'medium'}}>
          Clothing clean
        </Box>

        {/* price and order id */}
        <HStack px={3} justifyContent="space-between">
          <Text fontWeight="medium" color="primary" fontSize={'xs'}>
            kshs {order?.total_price}
          </Text>

          <Text color="gray.500" fontSize={'xs'}>
            Order Id: {order?._id}
          </Text>
        </HStack>

        {/* date and stage */}
        <HStack px={3} justifyContent="space-between">
          <Text color={'blueGray.600'} fontSize={'xs'}>
            {new Date(order?.updatedAt).toUTCString()}
          </Text>

          <Text color="gray.700" fontSize={'xs'} fontWeight="semibold">
            {order?.status}
          </Text>
        </HStack>

        <OrderStages order={order} />

        <HStack justifyContent="flex-end">
          <Button
            bg="primary"
            h={8}
            p={0}
            w={'70px'}
            onPress={() => navigation.navigate('OrderStatus', {order})}>
            View
          </Button>
        </HStack>
      </VStack>
    </Pressable>
  );
};

const OrderStages = ({order}) => (
  <HStack px={1}>
    <Center>
      <Box
        mb={1}
        p={2}
        borderWidth={'1'}
        borderColor={'primary'}
        zIndex={2}
        bg={
          [
            'confirmed',
            'picked',
            'processing',
            'shipping',
            'delivered',
          ].includes(order?.status)
            ? 'primary'
            : 'white'
        }
        borderRadius="full">
        <Icon
          size={5}
          color={
            [
              'confirmed',
              'picked',
              'processing',
              'shipping',
              'delivered',
            ].includes(order?.status)
              ? 'white'
              : 'primary'
          }
          as={<FontAwesome name={'calendar-check-o'} />}
        />
      </Box>
      <Text
        fontSize={'2xs'}
        color={
          [
            'confirmed',
            'picked',
            'processing',
            'shipping',
            'delivered',
          ].includes(order?.status)
            ? 'primary'
            : 'trueGray.400'
        }
        fontWeight={'semibold'}>
        Confirmed
      </Text>
    </Center>

    <Line
      checked={[
        'confirmed',
        'picked',
        'processing',
        'shipping',
        'delivered',
      ].includes(order?.status)}
    />
    <Center>
      <Box
        mb={1}
        p={2}
        borderWidth={'1'}
        borderColor={'primary'}
        zIndex={2}
        bg={
          ['picked', 'processing', 'shipping', 'delivered'].includes(
            order?.status,
          )
            ? 'primary'
            : 'white'
        }
        borderRadius="full">
        <Icon
          size={5}
          color={
            ['picked', 'processing', 'shipping', 'delivered'].includes(
              order?.status,
            )
              ? 'white'
              : 'primary'
          }
          as={<MaterialCommunityIcons name={'bike-fast'} />}
        />
      </Box>
      <Text
        fontSize={'2xs'}
        color={
          ['picked', 'processing', 'shipping', 'delivered'].includes(
            order?.status,
          )
            ? 'primary'
            : 'trueGray.400'
        }
        fontWeight={'semibold'}>
        Picked up
      </Text>
    </Center>

    <Line
      checked={['picked', 'processing', 'shipping', 'delivered'].includes(
        order?.status,
      )}
    />

    <Center>
      <Box
        mb={1}
        zIndex={2}
        p={2}
        borderWidth={'1'}
        borderColor={'primary'}
        bg={
          ['processing', 'shipping', 'delivered'].includes(order?.status)
            ? 'primary'
            : 'white'
        }
        borderRadius="full">
        <Icon
          size={5}
          color={
            ['processing', 'shipping', 'delivered'].includes(order?.status)
              ? 'white'
              : 'primary'
          }
          as={<MaterialIcons name={'local-laundry-service'} />}
        />
      </Box>
      <Text
        fontSize={'2xs'}
        color={
          ['processing', 'shipping', 'delivered'].includes(order?.status)
            ? 'primary'
            : 'trueGray.400'
        }
        fontWeight={'semibold'}>
        In Process
      </Text>
    </Center>

    <Line
      checked={['processing', 'shipping', 'delivered'].includes(order?.status)}
    />

    <Center>
      <Box
        mb={1}
        p={2}
        borderWidth={'1'}
        borderColor={'primary'}
        bg={
          ['shipping', 'delivered'].includes(order?.status)
            ? 'primary'
            : 'white'
        }
        zIndex={2}
        borderRadius="full">
        <Icon
          size={5}
          color={
            ['shipping', 'delivered'].includes(order?.status)
              ? 'white'
              : 'primary'
          }
          as={<MaterialCommunityIcons name={'truck-fast'} />}
        />
      </Box>
      <Text
        fontSize={'2xs'}
        color={
          ['shipping', 'delivered'].includes(order?.status)
            ? 'primary'
            : 'trueGray.400'
        }
        fontWeight={'semibold'}>
        Shipping
      </Text>
    </Center>

    <Line checked={['shipping', 'delivered'].includes(order?.status)} />
    <Center>
      <Box
        mb={1}
        p={2}
        borderWidth={'1'}
        borderColor={'primary'}
        bg={['delivered'].includes(order?.status) ? 'primary' : 'white'}
        borderRadius="full">
        <Icon
          size={5}
          color={['delivered'].includes(order?.status) ? 'white' : 'primary'}
          as={<FontAwesome5 name={'box-tissue'} />}
        />
      </Box>
      <Text
        fontSize={'2xs'}
        color={
          ['delivered'].includes(order?.status) ? 'primary' : 'trueGray.400'
        }
        fontWeight={'semibold'}>
        Delivered
      </Text>
    </Center>
  </HStack>
);

const Line = ({checked = true}) => (
  <Box
    bg={checked ? 'primary' : 'blueGray.300'}
    height={1}
    my={4}
    mx={-3}
    width={10}
  />
);
