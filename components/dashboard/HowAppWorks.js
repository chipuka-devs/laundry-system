import {Text, VStack, HStack, Icon, Center, Image} from 'native-base';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

const HowAppWorks = () => {
  return (
    <VStack
      bg={'amber.400'}
      py={2}
      px={4}
      borderRadius={'xl'}
      position={'absolute'}
      mx={'4'}
      top={'124px'}
      left={'0'}
      shadow={'2'}
      zIndex={'4'}
      right={'0'}>
      <HStack alignItems={'center'} mt={2} justifyContent={'space-between'}>
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
        <Icon color={'white'} as={<IonIcons name={'ios-arrow-forward'} />} />
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
        <Icon color={'white'} as={<IonIcons name={'ios-arrow-forward'} />} />

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
        <Icon color={'white'} as={<IonIcons name={'ios-arrow-forward'} />} />

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
