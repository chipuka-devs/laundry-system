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
import {Box, Button, Icon, Stack, Text} from 'native-base';
import React from 'react';
import OrdersMade from '../../screens/laundry/OrdersMade';

const Tab = createBottomTabNavigator();

export const LaundryNavigator = () => {
  const ICON_SIZE = 22;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 52,
          borderRadius: 10,
          // position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="laundry_dashboard"
        component={OrdersMade}
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
    </Tab.Navigator>
  );
};
