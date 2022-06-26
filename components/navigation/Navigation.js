import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Bucket,
  Dashboard,
  History,
  Home,
  Notifications,
  Order,
} from '../../screens';
import {COLORS} from '../../constants';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Center, Icon, Stack, Text} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const {bucket} = useSelector(state => state.bucket);

  const ICON_SIZE = 6;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 58,
          borderRadius: 10,
          // position: 'absolute'
          paddingHorizontal: 6,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'home' : 'home-outline';

            return (
              <Stack justifyContent={'center'} alignItems={'center'}>
                <Icon
                  as={<IonIcon name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={COLORS.primary}
                />
                <Text fontSize={'2xs'}>Home</Text>
              </Stack>
            );
          },
        }}
      />

      <Tab.Screen
        name="OrderHistory"
        component={History}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'card-text' : 'card-text-outline';

            return (
              <Stack justifyContent={'center'} alignItems={'center'}>
                <Icon
                  as={<MaterialCommunityIcons name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={COLORS.primary}
                />
                <Text fontSize={'2xs'}>Your Orders</Text>
              </Stack>
            );
          },
        }}
      />

      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = 'plus';

            return (
              <Box
                bg="white"
                borderRadius={'full'}
                p={1}
                position="absolute"
                top={-16}>
                <Box
                  bg={focused ? 'primary' : 'blueGray.200'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  h={12}
                  w={12}
                  borderWidth={1.5}
                  borderColor={focused ? 'white' : 'primary'}
                  borderRadius="full">
                  <Icon
                    as={<Entypo name={iconName} />}
                    name={iconName}
                    size={ICON_SIZE}
                    color={focused ? 'white' : 'primary'}
                  />
                </Box>
              </Box>
            );
          },
        }}
      />

      <Tab.Screen
        name="Bucket"
        component={Bucket}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'bucket' : 'bucket-outline';

            return (
              <Stack justifyContent={'center'} alignItems={'center'}>
                <Center
                  position={'absolute'}
                  top={-4}
                  right={-4}
                  bg="primary"
                  w={4}
                  h={4}
                  zIndex="3"
                  borderRadius={'full'}
                  _text={{
                    fontSize: 'xs',
                    color: 'white',
                    fontWeight: 'medium',
                  }}>
                  {bucket?.length}
                </Center>
                <Icon
                  as={<MaterialCommunityIcons name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={COLORS.primary}
                />
                <Text fontSize={'2xs'}>Bucket</Text>
              </Stack>
            );
          },
        }}
      />

      <Tab.Screen
        name="History"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'bell' : 'bell-o';

            return (
              <Stack justifyContent={'center'} alignItems={'center'}>
                <Icon
                  as={<FontAwesome name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={COLORS.primary}
                />
                <Text fontSize={'2xs'}>Notifications</Text>
              </Stack>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
