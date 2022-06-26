import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Button, HStack, Icon, Spinner, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

export const CategoryButtonOutlined = ({title, handlePress}) => (
  <Button
    borderRadius={'lg'}
    borderColor={'primary'}
    borderWidth={1.5}
    h={10}
    py="2"
    _text={{
      color: 'primary',
    }}
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

export const DangerRoundedButtonFilled = ({title}) => (
  <Button
    borderRadius={'full'}
    bg="danger.600"
    py="1"
    h={10}
    w={10}
    _text={{
      fontSize: 'xl',
    }}>
    <Icon color={'white'} size={5} as={<Feather name="x" />} />
  </Button>
);

export const CategoryButtonFilled = ({
  title,
  handlePress,
  isCurrent = false,
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
    onPress={handlePress}>
    {title}
  </Button>
);

export const LoadingButton = ({text}) => (
  <Button
    bg={'primary'}
    opacity={'60'}
    borderRadius={'full'}
    mt={4}
    width={'full'}

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
