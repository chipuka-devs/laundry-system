import React, {useEffect} from 'react';
import {
  Box,
  Text,
  VStack,
  Center,
  Image,
  Link,
  Stack,
  FormControl,
  Button,
  ScrollView,
  HStack,
  useToast,
} from 'native-base';
import {CustomInput} from './Login';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Register = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const {loading, isError, error, isSuccess} = useSelector(state => state.auth);

  useEffect(() => {
    const handleDispatch = () => {
      if (isError === true) {
        toast.show({
          render: () => {
            return <Error message={error} />;
          },
        });
      }
    };

    handleDispatch();

    return () => {
      reset();
    };
  }, [loading, isError, error, isSuccess]);

  return (
    <Box safeArea bg={'primary'} height={'full'}>
      <Center height={'1/6'}>
        <Image
          source={require('../assets/images/washing-machine.png')}
          alt="washing machine"
          height={'16'}
          width={'16'}
          mb={2}
        />

        <Text
          color={'warmGray.100'}
          fontWeight={600}
          fontSize={'sm'}
          textAlign={'center'}>
          CHIPUKA LAUNDRY
        </Text>
      </Center>

      <VStack
        position={'absolute'}
        bottom={0}
        right={0}
        left={0}
        height={'5/6'}
        bg={'gray.200'}
        borderTopRadius={40}
        space={4}
        p={5}>
        <ScrollView>
          <Text
            color={'primary'}
            fontWeight={700}
            fontSize={'xl'}
            mb={2}
            textAlign={'center'}>
            Create account
          </Text>

          <FormControl isRequired>
            <Stack space={3}>
              <Stack>
                <FormControl.Label
                  _text={{
                    color: 'black',
                  }}>
                  Full Name
                </FormControl.Label>

                <CustomInput placeholder={'i.e. John Doe'} type={'text'} />
              </Stack>

              <Stack>
                <FormControl.Label
                  _text={{
                    color: 'black',
                  }}>
                  Email
                </FormControl.Label>

                <CustomInput
                  placeholder={'i.e. johndoe@gmail.com'}
                  type={'email'}
                />
              </Stack>

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
                <CustomInput placeholder={'Enter Password'} type={'password'} />
              </Stack>

              <Stack>
                <FormControl.Label
                  _text={{
                    color: 'black',
                  }}>
                  Confirm Password
                </FormControl.Label>
                <CustomInput
                  placeholder={'Confirm Password'}
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
                }}>
                Register
              </Button>
            </Stack>
          </FormControl>
        </ScrollView>
        <Box
          position={'absolute'}
          bottom={0}
          mb={3}
          ml={5}
          flexDirection="row"
          _text={{
            fontSize: 'sm',
          }}>
          Already have an account?&nbsp;
          <Text
            color={'primary'}
            underline
            onPress={() => navigation.navigate('Login')}>
            Click here to Login
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Register;
