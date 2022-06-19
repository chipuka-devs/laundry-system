import {Box, Text} from 'native-base';
import React from 'react';

export const Error = ({message}) => (
  <Box
    bg="error.600"
    px="2"
    py="1"
    rounded="sm"
    mb={5}
    _text={{color: 'white', fontWeight: 'medium'}}>
    <Text fontWeight={'semibold'} color={'white'}>
      Error!
    </Text>
    {message}
  </Box>
);
export const Success = ({message}) => (
  <Box
    bg="success.600"
    px="2"
    py="1"
    rounded="sm"
    mb={5}
    _text={{color: 'white', fontWeight: 'medium'}}>
    <Text fontWeight={'semibold'} color={'white'}>
      Success!
    </Text>
    {message}
  </Box>
);

export const info = ({message}) => (
  <Box
    bg="info.600"
    px="2"
    py="1"
    rounded="sm"
    mb={5}
    _text={{color: 'white', fontWeight: 'medium'}}>
    <Text fontWeight={'semibold'} color={'white'}>
      Info!
    </Text>
    {message}
  </Box>
);
