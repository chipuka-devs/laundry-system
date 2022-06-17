import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Text,
  VStack,
  Center,
  Image,
  Input,
  Stack,
  FormControl,
  Button,
  ScrollView,
} from 'native-base';
import React, {useEffect} from 'react';
import UseLoader from '../components/Loader';
import {TITLE} from '../constants';

const Login = () => {
  const navigation = useNavigation();
  const NEXT_SCREEN = 'Laundry';
  // const [showLoader] = Use/Loader();

  useEffect(() => {
    // showLoader();
    // showLoader();
  }, []);

  return (
    // <ScrollView height={'full'}>
    <>
      <Box safeArea bg={'primary'} height={'full'}>
        <Center height={'2/6'}>
          <Image
            source={require('../assets/images/washing-machine.png')}
            alt="washing machine"
            height={'24'}
            width={'24'}
            mb={6}
          />

          <Text
            color={'warmGray.100'}
            fontWeight={600}
            fontSize={'lg'}
            textAlign={'center'}>
            {TITLE}
          </Text>
        </Center>

        <VStack
          position={'absolute'}
          bottom={0}
          right={0}
          left={0}
          height={'4/6'}
          bg={'gray.200'}
          borderTopRadius={40}
          space={5}
          p={5}>
          <ScrollView>
            <Text
              color={'primary'}
              fontWeight={700}
              fontSize={'xl'}
              mb={3}
              textAlign={'center'}>
              Login to account
            </Text>

            <FormControl isRequired>
              <Stack space={6}>
                <Stack>
                  <FormControl.Label
                    _text={{
                      color: 'black',
                    }}>
                    Phone number
                  </FormControl.Label>

                  <CustomInput placeholder={'+254...'} type={'text'} />
                </Stack>
                <Stack>
                  <FormControl.Label
                    _text={{
                      color: 'black',
                    }}>
                    Password
                  </FormControl.Label>
                  <CustomInput
                    placeholder={'Enter Password'}
                    type={'password'}
                  />
                </Stack>

                {/* <FormControl.Bu></FormControl.Bu> */}
                <Button
                  bg={'primary'}
                  mt={4}
                  borderRadius={'full'}
                  _text={{
                    fontWeight: 600,
                    fontSize: 'md',
                  }}
                  onPress={() => navigation.navigate(NEXT_SCREEN)}>
                  LOGIN
                </Button>
              </Stack>
            </FormControl>
          </ScrollView>
        </VStack>
        <Box
          position={'absolute'}
          bottom={0}
          mb={3}
          ml={5}
          flexDirection="row"
          _text={{
            fontSize: 'sm',
          }}>
          Have no account?&nbsp;
          <Text
            color={'primary'}
            underline
            onPress={() => navigation.navigate('Register')}>
            Click here to Register
          </Text>
        </Box>
      </Box>
    </>
    // </ScrollView>
  );
};

export default Login;

export const CustomInput = ({placeholder, type}) => (
  <Input
    variant="underlined"
    p={2}
    placeholder={placeholder}
    bg={'white'}
    borderRadius={'sm'}
    opacity={'0.8'}
    type={type}
  />
);
