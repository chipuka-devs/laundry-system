import {Box, Center, Text, VStack, HStack} from 'native-base';
import React from 'react';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  CategoryButtonFilled,
  CategoryButtonOutlined,
} from '../../components/Buttons';

const Payment = ({
  route: {
    params: {total},
  },
}) => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth);
  return (
    <Box safeArea>
      {/* Header */}
      <Header handleBack={() => navigation.goBack()} title={'Paymet'} />

      <Box h={'full'} bg={'white'}>
        <Box bg={'white'} mx={3} borderRadius={'lg'} shadow={'2'}>
          <VStack p={4} m={2} bg={'white'} borderRadius={'lg'} space={4}>
            <Box alignItems={'center'} mb={8}>
              <Text>Hey {user?.name}</Text>
              <Text mt={2}>Thankyou for your order</Text>
            </Box>
            <HStack justifyContent={'space-between'}>
              <Text color={'gray.500'}>Order id:</Text>
              <Text color={'gray.500'}>{`#FUA${Math.round(
                Math.random() * 100000,
              )}`}</Text>
            </HStack>

            <HStack justifyContent={'space-between'}>
              <Text color={'gray.500'}>TOTAL</Text>
              <Text fontWeight={500} fontSize="md">
                {total} kshs
              </Text>
            </HStack>

            <CategoryButtonFilled
              width={'3/4'}
              borderRadius={'full'}
              mx={'auto'}
              isCurrent
              handlePress={() =>
                navigation.navigate('Payment', {
                  total: TOTAL_PRICE,
                })
              }
              title={'Pay now'}
            />

            <CategoryButtonFilled
              width={'3/4'}
              borderRadius={'full'}
              mx={'auto'}
              bg={'black'}
              isCurrent
              handlePress={() =>
                navigation.navigate('Payment', {
                  total: TOTAL_PRICE,
                })
              }
              title={'Track Order'}
            />
          </VStack>
        </Box>
      </Box>

      <Box position={'absolute'} bottom={'65px'} w={'full'}>
        <CategoryButtonOutlined
          mx={'auto'}
          borderRadius={'full'}
          w={'3/4'}
          isCurrent
          handlePress={() =>
            navigation.navigate('Payment', {
              total: TOTAL_PRICE,
            })
          }
          title={'Track Order'}
        />
      </Box>
    </Box>
  );
};

export default Payment;
