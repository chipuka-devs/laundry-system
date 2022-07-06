import {VStack, HStack, Icon, Box, Text, Center, ScrollView} from 'native-base';
import React from 'react';
import {CategoryButtonFilled} from '../Buttons';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ActiveOrders = () => {
  const navigation = useNavigation();
  return (
    <VStack my={'4'}>
      <HStack alignItems={'center'} mb={'2'}>
        <Box flexGrow={1}>
          <Text color={'primaryDark'} fontWeight={'semibold'}>
            Active Orders
          </Text>
        </Box>

        <CategoryButtonFilled
          width={'120px'}
          py={1}
          borderRadius={'full'}
          mx={'auto'}
          h={'8'}
          _text={{fontSize: 'xs'}}
          isCurrent
          handlePress={() => navigation.navigate('Order')}
          title={'Order History'}
        />
      </HStack>
      <VStack space={'2'}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </VStack>
    </VStack>
  );
};

export default ActiveOrders;

const OrderCard = () => (
  <HStack bg={'muted.100'} shadow={'2'} borderRadius={'sm'} p={'3'} space={3}>
    <Center p={'2'} bg={'white'} shadow={'3'} borderRadius={'full'}>
      <Icon
        color={'primary'}
        size={'6'}
        as={<MaterialIcons name="local-laundry-service" />}
      />
    </Center>

    <Box>
      <Text>Order No: #33241234</Text>

      <Text fontSize={'xs'} color={'blue.400'}>
        Order Confirmed
      </Text>
    </Box>
  </HStack>
);
