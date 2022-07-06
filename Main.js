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
import {KeyboardAvoidingView, Text, Center, Spinner} from 'native-base';
import {Navigator} from './components/navigation/Navigation';
// import {LaundryNavigator} from './components/navigation/LaundryNavigation';
import OrdersMade from './screens/laundry/OrdersMade';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from './services/redux/reducers/AuthSlice';
import {useState} from 'react';
import {setBucket} from './services/redux/reducers/BucketSlice';

const Stack = createStackNavigator();

const Main = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(r => {
        const user = JSON.parse(r);
        if (user?._id) {
          dispatch(setUser({user: user}));
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch(err => console.log('Async Load Error', err));
  }, []);

  useEffect(() => {
    if (user?._id) {
      AsyncStorage.getItem('bucket')
        .then(r => {
          dispatch(setBucket(JSON.parse(r)));
        })
        .catch(err => console.log('Async Load Error', err));
    }
  }, [user?._id]);

  if (loading) {
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
  );
};

export default Main;
