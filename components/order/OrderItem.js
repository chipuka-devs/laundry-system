import {HStack, Image, Text, Box, Button, Icon} from 'native-base';
import React from 'react';
import {DangerRoundedButtonFilled, RoundedButtonFilled} from '../Buttons';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

const OrderItem = ({
  imageUri,
  title,
  price,
  addToCart,
  isIncluded = false,
  showAddToCartButton = true,
  onAdd,
  onMinus,
  numberOfItemsInCart,
}) => {
  const handleAdd = useCallback(() => {
    onAdd();
  }, [onAdd]);

  const handleMinus = useCallback(() => {
    onMinus();
  }, [onMinus]);

  return (
    <HStack
      px={3}
      py={4}
      bg={'#d8dfed'}
      alignItems={'center'}
      borderRadius={'md'}
      shadow="2"
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
        <Text
          fontSize={'md'}
          fontWeight={'medium'}
          color="primaryDark"
          textTransform={'capitalize'}>
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

      {numberOfItemsInCart >= 1 && (
        <HStack space={2}>
          <TouchableOpacity onPress={handleAdd}>
            <Box borderRadius={'xs'} bg={'primaryDark'} py={0.5} px={1}>
              <Icon color={'white'} size={3} as={<Ionicons name="plus" />} />
            </Box>
          </TouchableOpacity>

          <Text fontWeight={'medium'} fontSize={'sm'}>
            {numberOfItemsInCart}
          </Text>

          <TouchableOpacity onPress={handleMinus}>
            <Box borderRadius={'xs'} bg={'primaryDark'} py={0.5} px={1}>
              <Icon color={'white'} size={3} as={<Ionicons name="minus" />} />
            </Box>
          </TouchableOpacity>
        </HStack>
      )}

      {/* add to cart button */}

      {showAddToCartButton && (
        <RoundedButtonFilled handlePress={addToCart} title={'+'} />
      )}
    </HStack>
  );
};

export default OrderItem;

export const BucketItem = ({
  imageUri,
  title,
  price,
  handleAdd,
  handleMinus,
  numberOfItemsInCart = 0,
}) => {
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
      <HStack
        //   bg={'gray.100'}
        // w={24}
        h={8}
        borderRadius={'lg'}
        space={2}
        alignItems="center">
        <TouchableOpacity onPress={handleAdd}>
          <Box borderRadius={'xs'} bg={'primaryDark'} py={0.5} px={1}>
            <Icon color={'white'} size={3} as={<Ionicons name="plus" />} />
          </Box>
        </TouchableOpacity>

        <Text fontWeight={'medium'} fontSize={'sm'}>
          {numberOfItemsInCart}
        </Text>

        <TouchableOpacity onPress={handleMinus}>
          <Box borderRadius={'xs'} bg={'primaryDark'} py={0.5} px={1}>
            <Icon color={'white'} size={3} as={<Ionicons name="minus" />} />
          </Box>
        </TouchableOpacity>
      </HStack>
      {/* add to cart button */}
      <DangerRoundedButtonFilled title={'x'} />
    </HStack>
  );
};
