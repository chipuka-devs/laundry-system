import {Center, Spinner} from 'native-base';
import React, {useState} from 'react';

const UseLoader = () => {
  const [visible, setVisible] = useState(true);
  const showLoader = () => setVisible(true);
  const hideLoader = () => setVisible(false);

  const spinner = visible ? <Load /> : null;

  return [spinner, showLoader, hideLoader];
};

export default UseLoader;

const Load = () => (
  <Center
    position={'absolute'}
    zIndex={'5'}
    bg={'#ffffff30'}
    h={'full'}
    width={'full'}>
    <Center bg={'primary'} borderRadius={'xl'} w={20} h={20}>
      <Spinner color={'white'} size={'lg'} />
    </Center>
  </Center>
);
