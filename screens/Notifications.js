import React from 'react';
import Header from '../components/Header';
import {Box, HStack, ScrollView, Text, VStack} from 'native-base';

const Notifications = () => {
  return (
    <Box safeArea>
      {/* Header */}
      <Header handleBack={() => navigation.goBack()} title={'Notifications'} />

      <ScrollView bg="white" py={2} px={3}>
        {/* list */}
        <VStack space={3}>
          <NotificationCard isRead={false} />
          <NotificationCard isRead />
          <NotificationCard isRead />
          <NotificationCard isRead={false} />
          <NotificationCard isRead={false} />
          <NotificationCard isRead />
          <NotificationCard isRead />
          <NotificationCard isRead={false} />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Notifications;

const NotificationCard = ({isRead}) => (
  <HStack
    borderRadius={5}
    alignItems={'center'}
    space={3}
    bg={'blueGray.100'}
    p={3}>
    <Box
      h={3}
      w={3}
      bg={isRead ? 'blueGray.400' : 'danger.600'}
      borderRadius={'full'}
    />

    <VStack flex={1}>
      {/* timestamp */}
      <Text color={'gray.700'} fontSize={'2xs'} textAlign="right">
        12 May 2022 | 12:30
      </Text>

      {/* title */}
      <Text color={'gray.800'} fontSize={'sm'}>
        Package Delivered
      </Text>

      {/* title */}
      <Text color={'gray.500'} fontSize={'xs'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel
        atque ad magnam commodi ipsam corrupti nisi, porro
      </Text>

      {/* message */}
    </VStack>
  </HStack>
);
