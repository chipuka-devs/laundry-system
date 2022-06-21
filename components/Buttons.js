import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Button, HStack, Icon, Spinner, Text} from 'native-base';

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
export const RoundedButtonFilled = ({title}) => (
  <Button
    borderRadius={'full'}
    borderColor={'primary'}
    borderWidth={1.5}
    bg="primaryDark"
    py="1"
    h={10}
    w={10}
    _text={{
      color: 'white',
      fontSize: 'xl',
    }}>
    {title}
  </Button>
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
