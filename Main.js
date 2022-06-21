import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  Login,
  //   Order,
  OrderStatus,
  Payment,
  Register,
} from './screens';
import {
  extendTheme,
  KeyboardAvoidingView,
  NativeBaseProvider,
} from 'native-base';
import {COLORS} from './constants';
import {Navigator} from './components/navigation/Navigation';
// import {LaundryNavigator} from './components/navigation/LaundryNavigation';
import OrdersMade from './screens/laundry/OrdersMade';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from './services/redux/reducers/AuthSlice';

const Stack = createStackNavigator();

const Main = () => {
  const colorTheme = {
    primary: COLORS.primary,
    primaryDark: '#1B1464',
    primary_light: '#51A6D9',
    secondary: COLORS.secondary,
  };

  const theme = extendTheme({
    colors: colorTheme,
    fontConfig: {
      Poppins: {
        900: {
          normal: 'Poppins-Black',
        },
        800: {
          normal: 'Poppins-ExtraBold',
        },
        700: {
          normal: 'Poppins-Bold',
        },
        600: {
          normal: 'Poppins-SemiBold',
        },
        500: {
          normal: 'Poppins-Medium',
        },
        400: {
          normal: 'Poppins-Regular',
        },
        300: {
          normal: 'Poppins-light',
        },
      },
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      mono: 'Poppins',
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(r => {
        const user = JSON.parse(r);
        if (user?._id) {
          dispatch(setUser({user: user}));
        }
      })
      .catch(err => console.log('Async Load Error', err));
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <KeyboardAvoidingView
          flex={1}
          // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={Navigator} />
            <Stack.Screen name="Laundry" component={OrdersMade} />
            <Stack.Screen name="OrderStatus" component={OrderStatus} />
            {/* <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Bucket" component={Bucket} />*/}
            <Stack.Screen name="Payment" component={Payment} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
