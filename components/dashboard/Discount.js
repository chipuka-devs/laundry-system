import {Box, HStack, Image, Text} from 'native-base';
import React from 'react';

const Discount = () => {
  return (
    <HStack
      p={3}
      borderRadius={'lg'}
      bg={'primary'}
      justifyContent="space-between"
      alignItems={'center'}>
      <Box>
        <Box
          flexDirection={'row'}
          alignItems="center"
          _text={{
            color: 'gray.50',
            fontSize: 'lg',
          }}>
          <Text color={'gray.50'} fontSize="4xl" fontWeight={700}>
            20%
          </Text>
          &nbsp; OFF
        </Box>
        <Text color={'gray.50'}>on your first Order!</Text>

        <Box
          mt={3}
          p={1}
          bg="gray.50"
          borderRadius={'lg'}
          px={2}
          _text={{color: 'primaryDark', fontWeight: 'medium'}}>
          use code: FIRSTORDER
        </Box>
      </Box>

      <Image
        h={20}
        w={20}
        alt="washing machine"
        borderRadius={'full'}
        source={require('../../assets/images/wash_machine_2.jpg')}
      />
    </HStack>
  );
};

export default Discount;
