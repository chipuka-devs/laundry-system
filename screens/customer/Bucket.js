import {useNavigation} from '@react-navigation/native';
import {ScrollView, Box, VStack, HStack, Text} from 'native-base';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CategoryButtonFilled} from '../../components/Buttons';
import Header from '../../components/Header';
import {BucketItem} from '../../components/order/OrderItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setBucket} from '../../services/redux/reducers/BucketSlice';

const Bucket = () => {
  const navigation = useNavigation();
  const {bucket} = useSelector(state => state.bucket);

  const dispatch = useDispatch();

  const TOTAL_PRICE = bucket.reduce(function (prev, cur) {
    return prev + cur?.totalAmount;
  }, 0);

  const handleAddToCart = async itemParam => {
    var itemsInBucket = [...bucket];

    try {
      // let itemExistsInBucket =
      // bucket?.filter(item => item._id === item?._id).length > 0;
      if (bucket?.filter(item => item._id === itemParam?._id).length > 0) {
        const otherItemsArray = itemsInBucket.filter(
          item => item?._id !== itemParam._id,
        );
        let currentItem = {
          ...itemsInBucket.filter(item => item?._id === itemParam._id)[0],
        };
        currentItem.amount += 1;
        currentItem.totalAmount = currentItem.amount * currentItem.price;

        const newBucketArray = [currentItem, ...otherItemsArray];

        await AsyncStorage.setItem('bucket', JSON.stringify(newBucketArray));
        // newArr[currentItemPosition].amount += 1;
        // console.log(otherItemsArray, currentItem);
        dispatch(setBucket(newBucketArray));
        return;
        // newItem.amount += 1;
        // console.log(newArr);
      } else {
        itemsInBucket.push({
          ...itemParam,
          amount: 1,
          totalAmount: itemParam.price,
        });
        await AsyncStorage.setItem('bucket', JSON.stringify(itemsInBucket));
      }
      dispatch(setBucket(itemsInBucket));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromCart = async itemParam => {
    var itemsInBucket = [...bucket];

    if (bucket?.filter(item => item._id === itemParam?._id)[0].amount > 1) {
      const otherItemsArray = itemsInBucket.filter(
        item => item?._id !== itemParam._id,
      );
      let currentItem = {
        ...itemsInBucket.filter(item => item?._id === itemParam._id)[0],
      };
      currentItem.amount -= 1;
      currentItem.totalAmount = currentItem.amount * currentItem.price;

      const newBucketArray = [currentItem, ...otherItemsArray];

      await AsyncStorage.setItem('bucket', JSON.stringify(newBucketArray));
      // newArr[currentItemPosition].amount += 1;
      // console.log(otherItemsArray, currentItem);
      dispatch(setBucket(newBucketArray));
      return;
      // newItem.amount += 1;
      // console.log(newArr);
    } else {
      // itemsInBucket.push({...itemParam, amount: 1});
      const filteredItemsInBucket = itemsInBucket.filter(
        item => item?._id !== itemParam?._id,
      );
      await AsyncStorage.setItem(
        'bucket',
        JSON.stringify(filteredItemsInBucket),
      );
      dispatch(setBucket(filteredItemsInBucket));
    }
  };

  const handleDelete = async itemParam => {
    var itemsInBucket = [...bucket];

    const filteredItemsInBucket = itemsInBucket.filter(
      item => item?._id !== itemParam?._id,
    );
    console.log(filteredItemsInBucket.length);
    await AsyncStorage.setItem('bucket', JSON.stringify(filteredItemsInBucket));
    dispatch(setBucket(filteredItemsInBucket));
  };

  return (
    <Box safeArea>
      {/* Header */}
      <Header handleBack={() => navigation.goBack()} title={'Bucket'} />

      <ScrollView>
        {/* list */}
        <VStack space={4} p={3} mb={5}>
          {bucket?.map(item => (
            <BucketItem
              key={item._id}
              price={item?.price}
              imageUri={item?.img}
              title={item?.name}
              numberOfItemsInCart={item?.amount}
              handleAdd={() => handleAddToCart(item)}
              handleMinus={() => handleRemoveFromCart(item)}
              handleDelete={() => handleDelete(item)}
            />
          ))}
        </VStack>

        {bucket.length > 0 && (
          <Box
            p={3}
            bg={'white'}
            mx={3}
            borderRadius={'xl'}
            shadow={'2'}
            my={1}>
            <HStack my={5} justifyContent={'space-around'}>
              <Text fontSize={'md'} fontWeight={'semibold'}>
                Total Price(kshs):{' '}
              </Text>

              <Text fontSize={'md'} fontWeight={'semibold'}>
                {TOTAL_PRICE}
              </Text>
            </HStack>

            <CategoryButtonFilled
              width={'3/4'}
              borderRadius={'full'}
              mx={'auto'}
              isCurrent
              handlePress={() =>
                navigation.navigate('Payment', {
                  total: TOTAL_PRICE,
                })
              }
              title={'checkout'}
            />
          </Box>
        )}
      </ScrollView>
    </Box>
  );
};

export default Bucket;
