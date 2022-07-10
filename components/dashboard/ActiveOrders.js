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

const ActiveOrders = () => {
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
              2
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
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </VStack>
    </VStack>
  );
};

export default ActiveOrders;

const OrderCard = () => (
  <Pressable
    // bg={'muted.100'}
    _pressed={{backgroundColor: 'gray.200'}}
    onPress={() => console.log('Pressed')}>
    <HStack p={'1.5'} space={2} alignItems={'center'}>
      <Center p={'2'} bg={'white'} borderRadius={'full'}>
        <Icon
          color={'primary'}
          size={'6'}
          as={<MaterialIcons name="local-laundry-service" />}
        />
      </Center>

      <Box flexGrow={'1'}>
        <Text color={'primaryDark'}>Order No: #33241234</Text>

        <Text fontSize={'xs'} color={'blueGray.400'}>
          Order Confirmed
        </Text>
      </Box>

      <Text fontSize={'11'} color={'blueGray.400'}>
        19 Jul, 12:30am
      </Text>
    </HStack>
  </Pressable>
);
