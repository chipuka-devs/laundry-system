import {
  Box,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const OrderStatus = () => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      <Box position={'relative'}>
        <Header
          title={'Order Details'}
          handleBack={() => {
            navigation.goBack();
          }}
        />

        <HStack
          mx={6}
          p={'5'}
          bg="primary"
          borderRadius={'xl'}
          right={0}
          left={0}
          textAlign="center"
          justifyContent={'space-around'}
          alignItems={'center'}
          my={'2'}>
          <Box>
            <Text color={'white'} fontWeight={'semibold'}>
              Order ID: 0453221
            </Text>
            <Text fontSize={'2xs'} color="gray.100">
              Wed Jun 2022 | 12:30pm
            </Text>
          </Box>

          <Text color="gray.100" fontWeight={'semibold'}>
            kshs 540
          </Text>
        </HStack>
      </Box>

      <ScrollView p={3}>
        <VStack space={2}>
          <Text fontWeight={'semibold'} fontSize="17px">
            Items
          </Text>

          <Box>
            <Text color={'primary'} fontWeight={'semibold'}>
              Washing
            </Text>

            <VStack
              space={2}
              py={2}
              borderBottomWidth={1}
              borderColor={'gray.600'}>
              <OrderDetailItem title={'2 X T-shirt'} price={'450'} />
              <OrderDetailItem title={'1 X coat'} price={'300'} />
              <OrderDetailItem title={'1 X Blanket'} price={'500'} />
              <OrderDetailItem title={'2 X Bedsheets'} price={'200'} />
            </VStack>

            <Box py={2}>
              <HStack justifyContent={'space-between'}>
                <Text fontWeight={'semibold'} color="primary">
                  Total
                </Text>
                <Text fontWeight={'semibold'}>kshs 1450</Text>
              </HStack>
            </Box>
          </Box>
        </VStack>

        <VStack>
          <Text textAlign={'center'} fontWeight={'semibold'} fontSize="17px">
            Order Status
          </Text>

          <Box>
            <StatusItem
              icon={<FontAwesome name={'calendar-check-o'} />}
              status="Confirmed"
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              }
              time={'12:30'}
            />
            <Line />

            <StatusItem
              icon={<MaterialCommunityIcons name={'bike-fast'} />}
              status="Picked up"
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              }
              time={'12:30'}
            />
            <StatusItem
              icon={<MaterialIcons name={'local-laundry-service'} />}
              status="In Process"
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              }
              time={'12:30'}
            />
            <StatusItem
              icon={<MaterialCommunityIcons name={'truck-fast'} />}
              status="Shipping"
              isChecked={false}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              }
              time={'12:30'}
            />

            <StatusItem
              icon={<FontAwesome5 name={'box-tissue'} />}
              status="Delivered"
              isChecked={false}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              }
              time={'12:30'}
            />
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default OrderStatus;

const OrderDetailItem = ({title, price}) => (
  <HStack justifyContent={'space-between'}>
    <Text>{title}</Text>
    <Text fontWeight={'semibold'}>kshs {price}</Text>
  </HStack>
);

const StatusItem = ({icon, status, description, time, isChecked = true}) => (
  <HStack space={2} alignItems={'center'}>
    <Center
      mb={1}
      bg={isChecked ? 'primary' : 'white'}
      borderColor="primary"
      borderWidth={isChecked ? 0 : 1}
      borderRadius="full"
      h={10}
      w={10}>
      <Icon size={5} color={isChecked ? 'white' : 'primary'} as={icon} />
    </Center>

    <Box flex={'1'} h={16}>
      <Text color={isChecked ? 'primary' : 'gray.400'} fontWeight={'semibold'}>
        {status}
      </Text>
      <Text
        color={isChecked ? 'gray.600' : 'gray.400'}
        fontWeight={'medium'}
        fontSize={'11px'}>
        {description}
      </Text>
    </Box>

    <Text
      color={isChecked ? 'gray.900' : 'gray.400'}
      fontWeight={'semibold'}
      alignSelf="flex-start">
      {time}
    </Text>
  </HStack>
);

const Line = ({checked = true}) => (
  <Box
    bg={'primary'}
    width={1.5}
    position="absolute"
    height={'85%'}
    top={4}
    zIndex={-2}
    left={4}></Box>
);
