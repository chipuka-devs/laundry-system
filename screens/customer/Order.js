import {Box, ScrollView, HStack, VStack, Spinner, Heading} from 'native-base';
import React, {useEffect} from 'react';
import {
  CategoryButtonFilled,
  CategoryButtonOutlined,
} from '../../components/Buttons';
import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOrders, reset} from '../../services/redux/reducers/OrderSlice';
import {useState} from 'react';

const Order = () => {
  const navigation = useNavigation();
  const {loading, isError, error, isSuccess, orders} = useSelector(
    state => state.laundry,
  );
  const dispatch = useDispatch();

  const [orderParam, setOrderParam] = useState('');

  useEffect(() => {
    const getOrders = () => {
      dispatch(fetchOrders(`category=${orderParam}`));
    };

    getOrders();
  }, [orderParam]);

  useEffect(() => {
    if (isError === true) {
      toast.show({
        render: () => {
          return <Error message={error} />;
        },
      });
    }

    if (isSuccess) {
      console.log(orders.length);
    }

    return () => {
      dispatch(reset());
    };
  }, [loading, isError, error, isSuccess, orders]);

  return (
    <Box safeArea>
      {/* Header */}
      <Header
        handleBack={() => navigation.goBack()}
        title={'Wash and fold'}
        options
      />

      {/* categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space={3} px={3} mt={2} h={12}>
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
        {loading ? (
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
          <VStack space={4} p={3} mb={5}>
            {orders?.map(order => (
              <OrderItem
                key={order?._id}
                price={order?.price}
                imageUri={order?.img}
                title={order?.name}
              />
            ))}
          </VStack>
        )}
      </ScrollView>
    </Box>
  );
};

export default Order;
