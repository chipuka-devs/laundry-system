import {useNavigation} from '@react-navigation/native';
import {
  VStack,
  Text,
  ScrollView,
  HStack,
  Center,
  Icon,
  Image,
  Box,
  Pressable,
} from 'native-base';
import React from 'react';
// import {Pressable} from 'react-native';
import {CategoryButtonFilled} from '../Buttons';

const Services = () => {
  const navigation = useNavigation();

  return (
    <VStack>
      <HStack alignItems={'center'}>
        <Box flexGrow={'1'}>
          <Text
            color={'primaryDark'}
            textTransform={'uppercase'}
            fontWeight={'medium'}
            ml={'2'}
            textAlign={'center'}>
            Wash clothes
          </Text>
        </Box>
      </HStack>

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
      <VStack>
        <HStack justifyContent={'center'} w="full">
          <ServiceCard
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/hotel-service-blue-set-1-1/100/Untitled-1-04-512.png',
            }}
            title={'Wash'}
          />
        </HStack>
      </VStack>
      {/* </ScrollView> */}
    </VStack>
  );
};

export default Services;

const ServiceCard = ({source, title}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      bg={'blueGray.200'}
      _pressed={{backgroundColor: 'blueGray.300'}}
      onPress={() => navigation.navigate('Order')}
      mt={'2'}
      zIndex={'5'}
      shadow={'2'}
      w={'170px'}
      h={'170px'}
      space={2}
      p={'1'}
      borderRadius={'lg'}>
      <VStack alignItems={'center'} justifyContent={'center'} h={'full'}>
        <Image height={'32'} width={'32'} source={source} alt="image" />

        <Box
          _text={{
            fontSize: 'md',
            color: 'primary',
            fontWeight: 'medium',
          }}>
          {title}
        </Box>
      </VStack>
    </Pressable>
  );
};
