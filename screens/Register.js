import React, {useEffect, useState} from 'react';
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
  KeyboardAvoidingView,
} from 'native-base';
import {CustomInput} from './Login';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, reset} from '../services/redux/reducers/AuthSlice';
import {Error} from '../components/Toaster';
import {LoadingButton, SubmitButton} from '../components/Buttons';

const Register = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const {loading, isError, error, isSuccess, user} = useSelector(
    state => state.auth,
  );
  const dispatch = useDispatch();

  const NEXT_SCREEN = 'Main';

  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    cPassword: '',
  });
  const [secureTextInput, setSecureTextInput] = useState(false);

  const validate = s => {
    if (!s.email || s?.email === '') {
      toast.show({
        render: () => {
          return <Error message={'Email is required!'} />;
        },
      });
      return false;
    } else if (!s.name || s?.name === '') {
      toast.show({
        render: () => {
          return <Error message={'full name is required!'} />;
        },
      });
      return false;
    } else if (!s.phone || s?.phone === '') {
      toast.show({
        render: () => {
          return <Error message={'Phone number is required!'} />;
        },
      });
      return false;
    } else if (!s.password || s?.password === '') {
      toast.show({
        render: () => {
          return <Error message={'Password is required!'} />;
        },
      });
      return false;
    } else if (!s.cPassword || s?.cPassword === '') {
      toast.show({
        render: () => {
          return <Error message={'Please confirm password!'} />;
        },
      });
      return false;
    }
    if (state.cPassword !== state?.password) {
      toast.show({
        render: () => {
          return <Error message={'Passwords do not match!!'} />;
        },
      });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValid = validate(state);
    console.log(isValid);

    if (isValid) {
      dispatch(registerUser(state));
    }
  };

  useEffect(() => {
    reset();

    const handleDispatch = () => {
      if (isError === true) {
        toast.show({
          render: () => {
            return <Error message={error} />;
          },
        });
      }

      if (isSuccess) {
        console.log('Signup success!');
      }
    };

    handleDispatch();

    return () => {
      reset();
    };
  }, [loading, isError, error, isSuccess]);

  useEffect(() => {
    if (user?._id) {
      navigation.navigate(NEXT_SCREEN);
    }
  }, [user]);

  return (
    <KeyboardAvoidingView
      flex={1}
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
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

                  <CustomInput
                    placeholder={'i.e. John Doe'}
                    type={'text'}
                    value={state?.name}
                    handleChange={text =>
                      setState(prev => ({...prev, name: text}))
                    }
                  />
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
                    value={state?.password}
                    handleChange={text =>
                      setState(prev => ({...prev, password: text}))
                    }
                    secureTextEntry={secureTextInput}
                    onFocus={() => setSecureTextInput(true)}
                  />
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
                    value={state?.cPassword}
                    handleChange={text =>
                      setState(prev => ({...prev, cPassword: text}))
                    }
                    secureTextEntry={secureTextInput}
                    onFocus={() => setSecureTextInput(true)}
                  />
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
                    value={state?.email}
                    handleChange={text => {
                      setState(prev => ({...prev, email: text}));
                    }}
                  />
                </Stack>

                <Stack>
                  <FormControl.Label
                    _text={{
                      color: 'black',
                    }}>
                    Phone number
                  </FormControl.Label>

                  <CustomInput
                    placeholder={'+254...'}
                    type={'text'}
                    value={state?.phone}
                    handleChange={text =>
                      setState(prev => ({...prev, phone: text}))
                    }
                  />
                </Stack>

                {/* <FormControl.Bu></FormControl.Bu> */}
                {loading ? (
                  <LoadingButton />
                ) : (
                  <SubmitButton text={'Register'} handlePress={handleSubmit} />
                )}
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
    </KeyboardAvoidingView>
  );
};

export default Register;
