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
  Spinner,
  ScrollView,
  useToast,
} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
// import UseLoader from '../components/Loader';
import {TITLE} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {Error, Success} from '../components/Toaster';
import {loginUser, reset} from '../services/redux/reducers/AuthSlice';
import {LoadingButton, SubmitButton} from '../components/Buttons';

const Login = () => {
  const navigation = useNavigation();
  const NEXT_SCREEN = 'Main';
  // const [showLoader] = Use/Loader();
  const toast = useToast();
  const dispatch = useDispatch();

  const [loding, setLoding] = useState(true);
  const [state, setState] = useState({
    phone: '',
    password: '',
  });

  const {loading, isError, error, isSuccess, user} = useSelector(
    state => state.auth,
  );

  const handlePhoneChange = phone => {
    setState(prev => ({...prev, phone}));
  };

  const handlePasswordChange = password => {
    setState(prev => ({...prev, password}));
  };

  const handleSubmit = () => {
    dispatch(loginUser({emailOrPhone: state.phone, password: state.password}));
  };

  useEffect(() => {
    if (user?._id) {
      navigation.navigate(NEXT_SCREEN);
      setLoding(false);
    } else {
      setLoding(false);
    }
  }, [user]);

  useEffect(() => {
    const handleDispatch = () => {
      if (isError === true) {
        toast.show({
          render: () => {
            return <Error message={error} />;
          },
        });
      }

      if (isSuccess) {
        console.log('LOGIN Successful!');
      }
    };

    handleDispatch();

    return () => {
      reset();
    };
  }, [loading, isError, error, isSuccess]);

  if (loding) {
    return (
      <Center flex={1}>
        <Text color="primary" fontWeight="semibold">
          Loading . . .
        </Text>
        <Spinner size={'lg'} color="primary" />
      </Center>
    );
  }

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
          </Text>{' '}
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

                  <CustomInput
                    value={state?.phone}
                    handleChange={handlePhoneChange}
                    placeholder={'+254...'}
                    type={'text'}
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
                    handleChange={handlePasswordChange}
                  />
                </Stack>

                {/* <FormControl.Bu></FormControl.Bu> */}
                {loading ? (
                  <LoadingButton />
                ) : (
                  <SubmitButton text={'Login'} handlePress={handleSubmit} />
                )}
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

export const CustomInput = ({
  placeholder,
  type,
  value,
  handleChange,
  ...rest
}) => (
  <Input
    variant="underlined"
    p={2}
    placeholder={placeholder}
    bg={'white'}
    borderRadius={'sm'}
    opacity={'0.8'}
    size={'md'}
    type={type}
    value={value}
    onChangeText={handleChange}
    {...rest}
    // _text={{fontSize: 'lg'}}
  />
);
