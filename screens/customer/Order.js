import {
  Box,
  ScrollView,
  HStack,
  VStack,
  Spinner,
  Heading,
  useToast,
} from 'native-base';
import React, {useEffect} from 'react';
import {CategoryButtonFilled} from '../../components/Buttons';
import Header from '../../components/Header';
import OrderItem from '../../components/order/OrderItem';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOrders, reset} from '../../services/redux/reducers/OrderSlice';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  setBucket,
  // addToBucketStorage,
  // removeFromBucket,
} from '../../services/redux/reducers/BucketSlice';

const Order = () => {
  const navigation = useNavigation();
  const {
    loading: l,
    isError,
    error,
    isSuccess,
    orders,
  } = useSelector(st => st.laundry);
  const toast = useToast();

  const {bucket} = useSelector(st => st.bucket);
  const dispatch = useDispatch();

  // state
  const [orderParam, setOrderParam] = useState('');
  const [state, setState] = useState(orders);
  const [loading, setLoading] = useState(l);
  // const [bucket, setBucket] = useState(b || []);

  // console.log(bucket);
  // functions
  const handleAddToCart = async itemParam => {
    var itemsInBucket = [...bucket];
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

  useEffect(() => {
    // setLoading(true);
    const getOrders = () => {
      dispatch(fetchOrders());
      // setLoading(false);
    };

    // if (orders.length === 0) {
    getOrders();
    // }
  }, []);

  useEffect(() => {
    setState(orders);
    // }
  }, [orders]);

  useEffect(() => {
    const filterOrders = () => {
      setState(orders.filter(item => item.category === orderParam));
    };

    if (orderParam !== '') {
      filterOrders();
    } else {
      setState(orders);
    }
  }, [orderParam]);

  useEffect(() => {
    if (isError === true) {
      toast.show({
        render: () => {
          return <Error message={error} />;
        },
      });
    }

    return () => {
      dispatch(reset());
    };
  }, [loading, isError, error, isSuccess, orders]);

  return (
    <Box safeArea bg={'gray.100'}>
      {/* Header */}
      <Header
        handleBack={() => navigation.goBack()}
        title={'Wash and fold'}
        options
        handleBadgePress={() => navigation.navigate('Bucket')}
        numberInCart={bucket.length}
      />

      {/* categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space={3} px={3} mt={2} h={16}>
          <CategoryButtonFilled
            title="All"
            isCurrent={orderParam === ''}
            handlePress={() => setOrderParam('')}
          />
          <CategoryButtonFilled
            title="Clothing"
            isCurrent={orderParam === 'clothing'}
            handlePress={() => setOrderParam('clothing')}
          />
          <CategoryButtonFilled
            title="Bedding"
            isCurrent={orderParam === 'bedding'}
            handlePress={() => setOrderParam('bedding')}
          />
          <CategoryButtonFilled
            title="Carpet"
            isCurrent={orderParam === 'carpet'}
            handlePress={() => setOrderParam('carpet')}
          />
        </HStack>
      </ScrollView>
      <ScrollView>
        {/* list */}
        {loading || state?.length === 0 ? (
          <HStack
            space={2}
            mt={'50%'}
            justifyContent="center"
            flex={1}
            alignItems="center">
            <Spinner
              size="lg"
              color={'primary'}
              accessibilityLabel="Loading posts"
            />
            <Heading color="primary" fontSize="md">
              Loading
            </Heading>
          </HStack>
        ) : (
          <VStack space={2} p={3} mb={5}>
            {state?.map(order => (
              <OrderItem
                key={order?._id}
                price={order?.price}
                imageUri={order?.img}
                title={order?.name}
                addToCart={() => handleAddToCart(order)}
                onAdd={() => handleAddToCart(order)}
                onMinus={() => handleRemoveFromCart(order)}
                isIncluded={
                  bucket?.filter(item => item._id === order?._id).length > 0
                }
                numberOfItemsInCart={
                  bucket?.filter(item => item._id === order?._id)[0]?.amount ||
                  0
                }
              />
            ))}
          </VStack>
        )}
      </ScrollView>
    </Box>
  );
};

export default Order;
