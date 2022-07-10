import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Box, Button, Center, HStack, Icon, Spinner, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

export const CategoryButtonOutlined = ({title, handlePress, ...rest}) => (
  <Button
    borderRadius={'lg'}
    borderColor={'primary'}
    borderWidth={1.5}
    _text={{
      color: 'primary',
    }}
    h={10}
    {...rest}
    py="2"
    onPress={handlePress}>
    {title}
  </Button>
);
export const RoundedButtonFilled = ({title, handlePress}) => (
  <TouchableOpacity
    style={{
      borderRadius: 50,
      backgroundColor: '#1B1464',
      width: 38,
      height: 38,
      elevation: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    // borderRadius={'full'}
    // bg="primaryDark"

    onPress={handlePress}>
    <Text color={'white'} fontSize={'2xl'} mt="0.5">
      {title}
    </Text>
  </TouchableOpacity>
);

export const DangerRoundedButtonFilled = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Center
      borderRadius={'full'}
      bg="danger.600"
      py="1"
      h={8}
      w={8}
      _text={{
        fontSize: 'xl',
      }}>
      <Icon color={'white'} size={5} as={<Feather name="x" />} />
    </Center>
  </TouchableOpacity>
);

export const CategoryButtonFilled = ({
  title,
  handlePress,
  isCurrent = false,
  ...rest
}) => (
  <Button
    borderRadius={'lg'}
    borderColor={'primary'}
    borderWidth={1.5}
    bg={isCurrent ? 'primary' : 'gray.100'}
    h={10}
    py="2"
    _text={{
      color: isCurrent ? 'white' : 'primary',
    }}
    onPress={handlePress}
    {...rest}>
    {title}
  </Button>
);

export const LoadingButton = ({text, ...rest}) => (
  <Button
    bg={'primary'}
    opacity={'60'}
    borderRadius={'full'}
    width={'full'}
    // mt={4}
    {...rest}

    // onPress={handleContinue}
  >
    <HStack space={2}>
      <Spinner color={'gray.200'} />
      <Text color={'gray.200'} fontWeight={700} fontSize={'md'}>
        Loading . . .
      </Text>
    </HStack>
  </Button>
);

export const SubmitButton = ({text, handlePress}) => (
  <Button
    bg={'primary'}
    borderRadius={'full'}
    mt={4}
    width={'full'}
    onPress={handlePress}>
    <Text
      textTransform={'uppercase'}
      color={'white'}
      fontWeight={600}
      fontSize={'md'}>
      {text}
    </Text>
  </Button>
);
