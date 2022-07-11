import {
  VStack,
  HStack,
  Icon,
  Box,
  Text,
  Center,
  // ScrollView,
  Pressable,
} from 'native-base';
import React from 'react';
import {CategoryButtonFilled} from '../Buttons';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ActiveOrders = ({orders}) => {
  const navigation = useNavigation();
  return (
    <VStack mt={'5'}>
      <HStack alignItems={'center'} mb={'2'}>
        <Box flexGrow={1} flexDirection={'row'}>
          <Box
            _text={{color: 'primaryDark', fontWeight: 'medium'}}
            width={'auto'}>
            Active Orders
            <Center
              position={'absolute'}
              _text={{color: 'white', fontSize: 'xs'}}
              right={'-10'}
              top={'-10'}
              bg={'primary'}
              width={'4'}
              height={'4'}
              borderRadius={'full'}>
              {orders?.length}
            </Center>
          </Box>
        </Box>

        <CategoryButtonFilled
          width={'100px'}
          py={1}
          borderRadius={'full'}
          mx={'auto'}
          h={'8'}
          _text={{fontSize: 'xs'}}
          isCurrent
          handlePress={() => navigation.navigate('Order')}
          title={'See All'}
        />
      </HStack>
      <VStack space={'1.5'}>
        {orders.slice(0, 4).map(item => (
          <OrderCard
            id={item?._id}
            status={item?.status}
            date={item?.updatedAt}
            key={item?._id}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default ActiveOrders;

const OrderCard = ({id, date, status}) => (
  <Pressable
    // bg={'muted.100'}
    _pressed={{backgroundColor: 'gray.200'}}
    onPress={() => console.log('Pressed')}>
    <HStack p={'1.5'} space={1} alignItems={'center'}>
      <Center p={'2'} bg={'white'} borderRadius={'full'}>
        <Icon
          color={'primary'}
          size={'6'}
          as={<MaterialIcons name="local-laundry-service" />}
        />
      </Center>

      <Box flexGrow={'1'}>
        <Text color={'primaryDark'}>Order ID:</Text>
        <Text fontSize={'2xs'} color={'primaryDark'}>
          #FUA{id}
        </Text>

        <Text fontSize={'xs'} color={'blueGray.400'}>
          Status: {status}
        </Text>
      </Box>

      <Box
        maxW={'32'}
        _text={{
          fontSize: 'xs',
          color: 'blueGray.400',
        }}>
        {/* {19 Jul, 12:30am} */}
        {new Date(date).toUTCString()}
      </Box>
    </HStack>
  </Pressable>
);
