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

const History = ({}) => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      {/* Header */}
      <Header handleBack={() => navigation.goBack()} title={'My Orders'} />

      <ScrollView bg="white" py={2} px={3}>
        {/* list */}
        <VStack space={3}>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default History;

const OrderItem = () => {
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
            kshs 580
          </Text>

          <Text color="gray.500" fontSize={'xs'}>
            Order Id: 345211
          </Text>
        </HStack>

        {/* date and stage */}
        <HStack px={3} justifyContent="space-between">
          <Text fontSize={'xs'}>Friday 22 Jun 12:30</Text>

          <Text color="gray.700" fontSize={'xs'} fontWeight="semibold">
            Confirmed
          </Text>
        </HStack>

        <OrderStages />

        <HStack justifyContent="flex-end">
          <Button
            bg="primary"
            h={8}
            p={0}
            w={'70px'}
            onPress={() => navigation.navigate('OrderStatus')}>
            View
          </Button>
        </HStack>
      </VStack>
    </Pressable>
  );
};

const OrderStages = () => (
  <HStack px={1}>
    <Center>
      <Box mb={1} p={2} bg={'primary'} borderRadius="full">
        <Icon
          size={5}
          color={'white'}
          as={<FontAwesome name={'calendar-check-o'} />}
        />
      </Box>
      <Text fontSize={'2xs'} color={'primary'} fontWeight={'semibold'}>
        Confirmed
      </Text>
    </Center>

    <Line />
    <Center>
      <Box mb={1} p={2} bg={'primary'} borderRadius="full">
        <Icon
          size={5}
          color={'white'}
          as={<MaterialCommunityIcons name={'bike-fast'} />}
        />
      </Box>
      <Text fontSize={'2xs'} color={'primary'} fontWeight={'semibold'}>
        Picked up
      </Text>
    </Center>

    <Line />

    <Center>
      <Box mb={1} zIndex={2} p={2} bg={'primary'} borderRadius="full">
        <Icon
          size={5}
          color={'white'}
          as={<MaterialIcons name={'local-laundry-service'} />}
        />
      </Box>
      <Text fontSize={'2xs'} color={'primary'} fontWeight={'semibold'}>
        In Process
      </Text>
    </Center>

    <Line checked={false} />

    <Center>
      <Box
        mb={1}
        p={2}
        borderWidth={'1'}
        borderColor={'primary'}
        bg={'white'}
        zIndex={2}
        borderRadius="full">
        <Icon
          size={5}
          color={'primary'}
          as={<MaterialCommunityIcons name={'truck-fast'} />}
        />
      </Box>
      <Text fontSize={'2xs'} color={'primary'} fontWeight={'semibold'}>
        Shipping
      </Text>
    </Center>

    <Line checked={false} />
    <Center>
      <Box
        mb={1}
        p={2}
        borderWidth={'1'}
        borderColor={'primary'}
        bg={'white'}
        borderRadius="full">
        <Icon
          size={5}
          color={'primary'}
          as={<FontAwesome5 name={'box-tissue'} />}
        />
      </Box>
      <Text fontSize={'2xs'} color={'gray.500'} fontWeight={'semibold'}>
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
