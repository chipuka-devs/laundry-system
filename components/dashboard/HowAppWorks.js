import {
  Box,
  Text,
  VStack,
  HStack,
  Center,
  Image,
  ScrollView,
} from 'native-base';
import React from 'react';

const HowAppWorks = () => {
  return (
    <VStack
      bg={'amber.400'}
      py={2}
      px={4}
      borderRadius={'xl'}
      position={'absolute'}
      mx={'4'}
      top={'117px'}
      left={'0'}
      shadow={'2'}
      zIndex={'4'}
      right={'0'}>
      {/* <Text
        textAlign={'center'}
        fontSize={'md'}
        fontWeight="medium"
        color="white">
        How Fua-app Works.
      </Text> */}
      {/* <ScrollView horizontal> */}
      <HStack mt={2} justifyContent={'space-between'}>
        <Center>
          <Image
            height={10}
            width={10}
            source={require('../../assets/icons/cargo.png')}
            alt="order"
          />
          <Text color="white" mt={1} fontSize="xs">
            Make Order
          </Text>
        </Center>

        <Center>
          <Image
            height={10}
            width={10}
            source={require('../../assets/icons/self-collect.png')}
            alt="collection"
          />
          <Text color="white" mt={1} fontSize="xs">
            We collect
          </Text>
        </Center>

        <Center>
          <Image
            height={10}
            width={10}
            source={require('../../assets/icons/wash.png')}
            alt="washing"
          />
          <Text color="white" mt={1} fontSize="xs">
            Cleaning
          </Text>
        </Center>

        <Center>
          <Image
            height={10}
            width={10}
            source={require('../../assets/icons/delivery2.png')}
            alt="delivery"
          />
          <Text color="white" mt={1} fontSize="xs">
            We deliver
          </Text>
        </Center>
      </HStack>
      {/* </ScrollView> */}
    </VStack>
  );
};

export default HowAppWorks;
