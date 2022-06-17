import {HStack, Image, Text, Box, Button} from 'native-base';
import React from 'react';
import {DangerRoundedButtonFilled, RoundedButtonFilled} from './Buttons';

const OrderItem = ({imageUri, title, price}) => {
  return (
    <HStack
      p={3}
      bg={'#30509520'}
      alignItems={'center'}
      borderRadius={'xl'}
      space={5}>
      {/* image */}
      <Image
        source={{
          //   uri: 'https://www.kindpng.com/picc/m/95-952376_transparent-terno-png-coat-and-tie-png-png.png',
          uri: imageUri,
        }}
        objectSize="contain"
        alt={'image'}
        height={12}
        width={12}
        borderRadius="full"
      />
      {/* text */}
      <Box flex={1}>
        <Text fontSize={'md'} fontWeight={'medium'} color="primaryDark">
          {title}
        </Text>
        <Text color={'primaryDark'} fontWeight={'medium'}>
          <Text fontSize={'xs'} color={'primaryDark'}>
            kshs
          </Text>
          &nbsp;
          {price}
        </Text>
      </Box>
      {/* add to cart button */}
      <RoundedButtonFilled title={'+'} />
    </HStack>
  );
};

export default OrderItem;

export const BucketItem = ({imageUri, title, price}) => {
  return (
    <HStack
      p={3}
      bg={'#30509520'}
      alignItems={'center'}
      borderRadius={'xl'}
      space={5}>
      {/* image */}
      <Image
        source={{
          //   uri: 'https://www.kindpng.com/picc/m/95-952376_transparent-terno-png-coat-and-tie-png-png.png',
          uri: imageUri,
        }}
        objectSize="contain"
        alt={'image'}
        height={12}
        width={12}
        borderRadius="full"
      />
      {/* text */}
      <Box flex={1}>
        <Text fontSize={'md'} fontWeight={'medium'} color="primaryDark">
          {title}
        </Text>
        <Text color={'primaryDark'} fontWeight={'medium'}>
          <Text fontSize={'xs'} color={'primaryDark'}>
            kshs
          </Text>
          &nbsp;
          {price}
        </Text>

        <HStack
          //   bg={'gray.100'}
          w={24}
          h={8}
          borderRadius={'lg'}
          space={2}
          alignItems="center">
          <Button
            borderRadius={'lg'}
            borderColor={'primary'}
            borderWidth={1}
            _text={{color: 'primaryDark'}}
            p={0}
            width={'8'}>
            -
          </Button>
          <Text fontSize={'md'} color={'primaryDark'}>
            1
          </Text>
          <Button
            borderRadius={'lg'}
            borderColor={'primary'}
            borderWidth={1}
            _text={{color: 'primaryDark'}}
            p={0}
            width={'8'}>
            +
          </Button>
        </HStack>
      </Box>
      {/* add to cart button */}
      <DangerRoundedButtonFilled title={'x'} />
    </HStack>
  );
};
