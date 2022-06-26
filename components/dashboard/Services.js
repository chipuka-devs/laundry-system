import {
  VStack,
  Text,
  ScrollView,
  HStack,
  Center,
  Icon,
  Image,
  Box,
} from 'native-base';
import React from 'react';

const Services = () => {
  return (
    <VStack>
      <Text color={'primaryDark'} fontWeight={'medium'} ml={'2'} mt={1}>
        Services
      </Text>

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
      <VStack mt={1} space={3}>
        <HStack justifyContent={'space-around'} w="full">
          <ServiceCard
            source={require('../../assets/icons/wash.png')}
            title={'wash'}
          />
          <ServiceCard
            source={require('../../assets/icons/ironing.png')}
            title={'iron'}
          />
          <ServiceCard
            source={require('../../assets/icons/dry.png')}
            title={'dry wash'}
          />
        </HStack>
        <HStack justifyContent={'space-around'} w="full">
          <ServiceCard
            source={require('../../assets/icons/carpet-cleaner.png')}
            title={'carpet wash'}
          />
          <ServiceCard
            source={require('../../assets/icons/delivery.png')}
            title={'delivery'}
          />
          <ServiceCard
            source={require('../../assets/icons/fold.png')}
            title={'folding'}
          />
        </HStack>
      </VStack>
      {/* </ScrollView> */}
    </VStack>
  );
};

export default Services;

const ServiceCard = ({source, title}) => (
  <VStack
    alignItems={'center'}
    justifyContent={'center'}
    space={2}
    bg={'white'}
    borderRadius={'lg'}
    zIndex={'5'}
    w={20}
    h={20}>
    <Image height={'10'} width={10} source={source} alt="image" />

    <Box
      _text={{
        fontSize: 13,
        color: 'primary',
        fontWeight: 'medium',
      }}>
      {title}
    </Box>
  </VStack>
);
