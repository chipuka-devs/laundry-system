import {Box, ScrollView, HStack, VStack} from 'native-base';
import React from 'react';
import {
  CategoryButtonFilled,
  CategoryButtonOutlined,
} from '../../components/Buttons';
import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      {/* Header */}
      <Header
        handleBack={() => navigation.goBack()}
        title={'Wash and fold'}
        options
      />

      {/* categories */}
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={3} px={3} py={1} h={16}>
            <CategoryButtonFilled title="clothing" />
            <CategoryButtonOutlined title="Bedding" />
            <CategoryButtonOutlined title="Carpet" />
            <CategoryButtonOutlined title="Others" />
          </HStack>
        </ScrollView>
        {/* list */}
        <VStack space={4} p={3} mb={5}>
          <OrderItem
            price={100}
            imageUri={'https://freepngimg.com/thumb/categories/1508.png'}
            title={'clothes'}
          />
          <OrderItem
            price={350}
            imageUri={
              'https://www.kindpng.com/picc/m/95-952376_transparent-terno-png-coat-and-tie-png-png.png'
            }
            title={'coats'}
          />
          <OrderItem
            price={200}
            imageUri={
              'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F03%2F11%2Fmellanni-hotel-luxury-bed-sheets.png'
            }
            title={'Bedsheets'}
          />
          <OrderItem
            price={500}
            imageUri={'https://pngimg.com/uploads/carpet/carpet_PNG65.png'}
            title={'Carpets'}
          />
          <OrderItem
            price={350}
            imageUri={
              'https://www.kindpng.com/picc/m/95-952376_transparent-terno-png-coat-and-tie-png-png.png'
            }
            title={'coats'}
          />
          <OrderItem
            price={200}
            imageUri={
              'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F03%2F11%2Fmellanni-hotel-luxury-bed-sheets.png'
            }
            title={'Bedsheets'}
          />
          <OrderItem
            price={500}
            imageUri={'https://pngimg.com/uploads/carpet/carpet_PNG65.png'}
            title={'Carpets'}
          />
          <OrderItem
            price={350}
            imageUri={
              'https://www.kindpng.com/picc/m/95-952376_transparent-terno-png-coat-and-tie-png-png.png'
            }
            title={'coats'}
          />
          <OrderItem
            price={200}
            imageUri={
              'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F03%2F11%2Fmellanni-hotel-luxury-bed-sheets.png'
            }
            title={'Bedsheets'}
          />
          <CategoryButtonOutlined
            title={'Bucket'}
            handlePress={() => navigation.navigate('Bucket')}
          />
          <OrderItem
            price={500}
            imageUri={'https://pngimg.com/uploads/carpet/carpet_PNG65.png'}
            title={'Carpets'}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Order;
