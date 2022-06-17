import {Box, Button, Text, VStack, ScrollView} from 'native-base';
import React from 'react';
import Discount from '../../components/Discount';
import Header from '../../components/DashboardHeader';
import HowAppWorks from '../../components/HowAppWorks';
import Services from '../../components/Services';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {/* Header */}
      <Header>
        <Text fontSize={'xs'} color={'gray.500'}>
          Hey username
        </Text>
        <Text fontWeight={600} color={'primaryDark'} fontSize={'lg'}>
          Welcome Back!
        </Text>
      </Header>

      <VStack bg={'gray.200'} height={'full'} safeArea p={3} space={6}>
        {/* Services offered */}
        <Services />

        {/* Discount card */}
        <Discount />

        {/* How app works */}
        <HowAppWorks />
      </VStack>
    </ScrollView>
  );
};

export default Dashboard;
