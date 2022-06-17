import React, {useCallback} from 'react';
import {
  Box,
  Button,
  Text,
  HStack,
  Center,
  VStack,
  ScrollView,
  Pressable,
  Icon,
} from 'native-base';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const OrdersMade = () => {
  return (
    <Box safeArea>
      {/* Header */}

      <LaundryHeader>
        <LaundryHeaderItem name={'Pending'} isFocused isMarked />
        <LaundryHeaderItem name={'Confirmed'} />
        <LaundryHeaderItem name={'Cancelled'} />
        <LaundryHeaderItem name={'All'} />
        <LaundryHeaderItem name={'Pending'} />
      </LaundryHeader>

      <ScrollView>
        <Box px={3}>
          <VStack space={2}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default OrdersMade;

const LaundryHeader = ({children}) => {
  return (
    <VStack p={3}>
      <HStack width={'full'} textAlign={'center'}>
        <Box
          justifyContent={'center'}
          _text={{
            fontWeight: 'semibold',
            fontSize: 'lg',
          }}>
          Orders
        </Box>
      </HStack>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack
          space={4}
          borderColor={'gray.300'}
          borderBottomWidth={'1'}
          py={2}>
          {children}
        </HStack>
      </ScrollView>
    </VStack>
  );
};

const LaundryHeaderItem = ({isFocused, name, isMarked}) => (
  <Pressable position={'relative'}>
    {isMarked && <Marker position={'absolute'} right={'0'} top={'0'} />}

    <Box
      my={'auto'}
      py={1}
      _text={{
        color: isFocused ? 'primary' : 'gray.500',
        fontWeight: 'medium',
        fontSize: isFocused ? '16px' : 'sm',
      }}>
      {name}
    </Box>
  </Pressable>
);

const Marker = ({...rest}) => (
  <Box w={1.5} h={1.5} bg={'red.500'} borderRadius={'full'} {...rest} />
);

const OrderItem = () => (
  <HStack space={3} p={3} bg={'white'} shadow={'2'} borderRadius={'xl'}>
    <Center w={10} h={10} bg={'gray.400'} color={'white'} borderRadius={'full'}>
      EP
    </Center>

    <VStack space={3}>
      <Box>
        <Text color={'gray.700'}>
          <Text fontWeight={'semibold'}>Kefa Fundi</Text> Order 34445900
        </Text>
        <HStack space={6}>
          <Text fontSize={'2xs'}>30mins ago</Text>
          <Text fontSize={'2xs'}>Old Donholm, Wabu Plaza</Text>
        </HStack>
        <HStack alignItems={'center'} space={1} mt={1.5}>
          <Text fontSize={'2xs'} color={'gray.500'}>
            Status:
          </Text>
          <Box
            bg={'gray.300'}
            borderRadius={'full'}
            py={'0.5'}
            px={2}
            _text={{fontWeight: 'bold', color: 'gray.500', fontSize: '2xs'}}>
            Pending
          </Box>
        </HStack>
      </Box>

      <HStack justifyContent={'space-between'}>
        <LaundryButton>
          <Text fontSize={'12.5px'} color={'white'}>
            Confirm
          </Text>
        </LaundryButton>

        <LaundryButton bg={'danger.500'}>
          <Text fontSize={'12.5px'} color={'white'}>
            Decline
          </Text>
        </LaundryButton>

        <OutlinedLaundryButton h={'35px'} w={'35px'}>
          <Icon size={'4'} color={'primary'} as={<IonIcon name="ios-call" />} />
        </OutlinedLaundryButton>
      </HStack>
    </VStack>
  </HStack>
);

const LaundryButton = ({children, ...rest}) => (
  <Button
    p={2}
    bg={'primary'}
    px={3}
    color={'white'}
    borderRadius={'full'}
    {...rest}>
    {children}
  </Button>
);

const OutlinedLaundryButton = ({children, ...rest}) => (
  <Button
    p={1.5}
    px={3}
    borderRadius={'full'}
    borderColor={'primary'}
    borderWidth={1}
    {...rest}>
    {children}
  </Button>
);
