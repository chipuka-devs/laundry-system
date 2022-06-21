import React from 'react';
import {HStack, Image, Center, Icon, Text, VStack, Tooltip} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout, setUser} from '../services/redux/reducers/AuthSlice';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({children}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = async () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        dispatch(setUser(null));
        navigation.navigate('Login');
      })
      .catch(err => console.log('Logout error:', err));
  };
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

        <TouchableOpacity onPress={handleLogout}>
          <Tooltip label={'Logout'}>
            <Center bg={'gray.50'} p={2} borderRadius={'full'}>
              <Icon
                size={5}
                color={'primary'}
                as={<AntDesign name="logout" />}
              />
            </Center>
          </Tooltip>
          <Text fontSize={'2xs'} color="primary">
            logout
          </Text>
        </TouchableOpacity>
      </HStack>

      {children}
    </VStack>
  );
};

export default Header;
