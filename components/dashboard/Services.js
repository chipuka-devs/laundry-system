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
            mt={1}>
            Select item
          </Text>
        </Box>

        <CategoryButtonFilled
          width={'24'}
          py={1}
          borderRadius={'full'}
          mx={'auto'}
          h={'8'}
          _text={{fontSize: 'xs'}}
          isCurrent
          handlePress={() => navigation.navigate('Order')}
          title={'view all'}
        />
      </HStack>

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
      <VStack mt={1} space={3} py={'3'}>
        <HStack justifyContent={'space-between'} w="full">
          <ServiceCard
            source={require('../../assets/icons/pants.png')}
            title={'Trouser'}
          />
          <ServiceCard
            source={require('../../assets/icons/trench-coat.png')}
            title={'Coat'}
          />
          <ServiceCard
            source={require('../../assets/icons/tshirt.png')}
            title={'TShirt'}
          />
          <ServiceCard
            source={require('../../assets/icons/woman-clothes.png')}
            title={'Dress'}
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
      bg={'muted.100'}
      _pressed={{backgroundColor: 'gray.200'}}
      onPress={() => navigation.navigate('Order')}
      zIndex={'5'}
      shadow={'2'}
      w={'76px'}
      h={'76px'}
      space={2}
      p={'1'}
      borderRadius={'lg'}>
      <VStack alignItems={'center'} justifyContent={'center'}>
        <Image height={'10'} width={'10'} source={source} alt="image" />

        <Box
          _text={{
            fontSize: 'xs',
            color: 'primary',
            fontWeight: 'medium',
          }}>
          {title}
        </Box>
      </VStack>
    </Pressable>
  );
};
