import {Box, Text, VStack, HStack} from 'native-base';
import React from 'react';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      {/* Header */}
      <Header handleBack={() => navigation.goBack()} title={'Paymet'} options />

      <VStack p={4} m={2} bg={'white'} borderRadius={'lg'} space={3}>
        <HStack justifyContent={'space-between'}>
          <Text color={'gray.500'}>Subtotal</Text>
          <Text fontWeight={500} fontSize="md">
            450 kshs
          </Text>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Text color={'gray.500'}>VAT</Text>
          <Text fontWeight={500} fontSize="md">
            20 kshs
          </Text>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Text color={'primaryDark'}>Subtotal</Text>
          <Text color={'primaryDark'} fontWeight={500} fontSize="md">
            470 kshs
          </Text>
        </HStack>
      </VStack>

      <VStack p={4} m={2} bg={'white'} borderRadius={'lg'} space={3}>
        <Text fontSize={'md'} color={'gray.500'}>
          MPesa Agent no.
        </Text>
        <Text fontWeight={500} fontSize="md">
          45666277
        </Text>
      </VStack>
    </Box>
  );
};

export default Payment;
