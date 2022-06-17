import React from 'react';
import {
  HStack,
  Image,
  Center,
  Icon,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({children}) => {
  return (
    <VStack space={1.5} bg="gray.200" py={2} px={3}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Image
          alt={'image'}
          style={{width: 40, height: 40}}
          borderRadius={'full'}
          source={{
            uri: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.490.medium.jpg/1594668408164.jpg',
          }}
        />

        <Pressable>
          <Center bg={'gray.50'} p={2} borderRadius={'full'}>
            <Icon
              size={5}
              color={'primary'}
              as={<FontAwesome name="bell-o" />}
            />
          </Center>

          <Center
            height={'4'}
            width={'4'}
            borderRadius={'full'}
            bg={'danger.500'}
            position={'absolute'}
            right={'-4'}
            top={'-4'}>
            <Text fontSize={9} color={'white'}>
              1
            </Text>
          </Center>
        </Pressable>
      </HStack>

      {children}
    </VStack>
  );
};

export default Header;
