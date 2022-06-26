import {useNavigation} from '@react-navigation/native';
import {ScrollView, Box, VStack} from 'native-base';
import React from 'react';
import {CategoryButtonFilled} from '../../components/Buttons';
import Header from '../../components/Header';
import {BucketItem} from '../../components/order/OrderItem';

const Bucket = () => {
  const navigation = useNavigation();

  return (
    <Box safeArea>
      {/* Header */}
      <Header handleBack={() => navigation.goBack()} title={'Bucket'} />

      <ScrollView>
        {/* list */}
        <VStack space={4} p={3} mb={5}>
          <BucketItem
            price={200}
            imageUri={
              'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F03%2F11%2Fmellanni-hotel-luxury-bed-sheets.png'
            }
            title={'Bedsheets'}
          />

          <BucketItem
            price={500}
            imageUri={'https://pngimg.com/uploads/carpet/carpet_PNG65.png'}
            title={'Carpets'}
          />
        </VStack>

        <CategoryButtonFilled
          handlePress={() => navigation.navigate('Payment')}
          title={'checkout'}
        />
      </ScrollView>
    </Box>
  );
};

export default Bucket;
