import {Box, Text, HStack, Button, Icon, Center} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({
  handleBack,
  title,
  options = false,
  numberInCart = 0,
  handleBadgePress,
}) => {
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

      <TouchableOpacity onPress={handleBadgePress}>
        {options && (
          <>
            <Center
              position={'absolute'}
              top={-8}
              right={-8}
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
              {numberInCart}
            </Center>
            <Icon
              color={'primary'}
              size={5}
              as={<MaterialCommunityIcons name="cart-outline" />}
            />
          </>
        )}
      </TouchableOpacity>
    </HStack>
  );
};

export default Header;
