import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Button, Icon} from 'native-base';

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

export const CategoryButtonFilled = ({title, handlePress}) => (
  <Button
    borderRadius={'lg'}
    borderColor={'primary'}
    borderWidth={1.5}
    bg="primary"
    h={10}
    py="2"
    _text={{
      color: 'white',
    }}
    onPress={handlePress}>
    {title}
  </Button>
);
