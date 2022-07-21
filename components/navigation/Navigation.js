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
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
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
          paddingHorizontal: 3,
          // backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'home' : 'home-outline';

            return (
              <Stack
                zIndex={'4'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Icon
                  as={<MaterialCommunityIcons name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={focused ? COLORS.primary : 'blueGray.400'}
                />
                <Text
                  color={focused ? COLORS.primary : 'blueGray.400'}
                  fontSize={'11px'}>
                  Home
                </Text>
              </Stack>
            );
          },
        }}
      />
      {/* 
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'washing-machine' : 'dishwasher';

            return (
              <Stack
                zIndex={'4'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Icon
                  as={<MaterialCommunityIcons name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={focused ? COLORS.primary : 'blueGray.400'}
                />
                <Text
                  color={focused ? COLORS.primary : 'blueGray.400'}
                  fontSize={'11px'}>
                  Wash
                </Text>
              </Stack>
            );
          },
        }}
      /> */}

      <Tab.Screen
        name="OrderHistory"
        component={History}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'card-text' : 'card-text-outline';

            return (
              <Stack
                zIndex={'4'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Icon
                  as={<MaterialCommunityIcons name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={focused ? COLORS.primary : 'blueGray.400'}
                />
                <Text
                  color={focused ? COLORS.primary : 'blueGray.400'}
                  fontSize={'11px'}>
                  Your Orders
                </Text>
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
            const iconName = focused ? 'washing-machine' : 'dishwasher';

            return (
              <Box
                bg="white"
                borderRadius={'full'}
                p={1}
                position="absolute"
                top={-24}>
                <Box
                  bg={focused ? 'primary' : 'blueGray.200'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  h={'60px'}
                  w={'60px'}
                  borderWidth={1.5}
                  borderColor={focused ? 'white' : 'primary'}
                  borderRadius="full">
                  <Icon
                    as={<MaterialCommunityIcons name={iconName} />}
                    name={iconName}
                    size={ICON_SIZE + 1}
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
                    fontSize: '11px',
                    color: 'white',
                    fontWeight: 'medium',
                  }}>
                  {bucket?.length}
                </Center>
                <Icon
                  as={<MaterialCommunityIcons name={iconName} />}
                  name={iconName}
                  size={ICON_SIZE}
                  color={focused ? COLORS.primary : 'blueGray.400'}
                />
                <Text
                  color={focused ? COLORS.primary : 'blueGray.400'}
                  fontSize={'11px'}>
                  Bucket
                </Text>
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
                  color={focused ? COLORS.primary : 'blueGray.400'}
                />
                <Text
                  color={focused ? COLORS.primary : 'blueGray.400'}
                  fontSize={'11px'}>
                  Notifications
                </Text>
              </Stack>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
