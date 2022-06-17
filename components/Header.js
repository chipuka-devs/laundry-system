import {Box, Text, HStack, Button, Icon} from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({handleBack, title, options = false}) => {
  return (
    <HStack
      bg={'white'}
      justifyContent="space-between"
      alignItems={'center'}
      p={4}>
      {/* Backbutton */}
      <Button px={1} py={0} borderColor={'primary'} onPress={handleBack}>
        <Icon color={'primary'} size={5} as={<IonIcon name="arrow-back" />} />
      </Button>
      {/* Title */}

      <Text color="primary" fontSize={'md'} fontWeight={'medium'}>
        {title}
      </Text>
      {/* options button(not compulsory) */}

      <Button>
        {options && (
          <Icon
            color={'primary'}
            size={5}
            as={<MaterialCommunityIcons name="dots-vertical" />}
          />
        )}
      </Button>
    </HStack>
  );
};

export default Header;
