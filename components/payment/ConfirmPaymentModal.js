import React, {useState} from 'react';
import {
  Actionsheet,
  Text,
  Box,
  Icon,
  HStack,
  VStack,
  useToast,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {
  CategoryButtonFilled,
  CategoryButtonOutlined,
  DangerRoundedButtonFilled,
  LoadingButton,
} from '../Buttons';
import OrderServices from '../../services/server/OrderServices';
import {useNavigation} from '@react-navigation/native';
import Toast from '../toasts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setBucket} from '../../services/redux/reducers/BucketSlice';

const ConfirmPaymentModal = ({isOpen, onClose, cartItems}) => {
  const navigation = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();

  const [cancelling, setCancelling] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const handleCancelOrder = () => {
    setCancelling(true);
    // update status to cancelled
    OrderServices.updateOrder(cartItems?._id, {status: 'cancelled'})
      .then(r => {
        toast.show({
          render: () => {
            return <Toast.info message={'Order Cancelled!'} />;
          },
          placement: 'top',
          display: 3000,
        });
        // navigate back to bucket
        setCancelling(false);

        navigation.navigate('Bucket');
      })
      .catch(err => {
        console.log(err.message);
        setCancelling(false);
      });
  };

  const handleConfirmOrder = () => {
    setConfirming(true);

    OrderServices.updateOrder(cartItems?._id, {status: 'confirmed'})
      .then(async r => {
        // delete cart from storage
        await AsyncStorage.setItem('bucket', JSON.stringify([]));
        dispatch(setBucket([]));

        toast.show({
          render: () => {
            return <Toast.success message={'Order Confirmed!'} />;
          },
          placement: 'top',
          display: 3000,
        });
        // navigate back to bucket
        setConfirming(false);

        navigation.navigate('OrderHistory');
      })
      .catch(err => {
        console.log(err);
        setConfirming(false);
      });
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
      <Actionsheet.Content py={2} px={6}>
        <HStack px={'1'} justifyContent={'space-between'} w={'full'}>
          <Text fontWeight={'semibold'} fontSize={'md'} color={'primaryDark'}>
            Confirm order!
          </Text>

          <TouchableOpacity onPress={onClose}>
            <Icon
              color={'gray.400'}
              size={5}
              as={<AntDesign name={'closecircleo'} />}
            />
          </TouchableOpacity>
        </HStack>
        <Box
          flexDir={'row'}
          justifyContent={'space-between'}
          w={'full'}
          pt={'2'}
          px={'2'}>
          <Text fontWeight={'medium'} color={'gray.500'}>
            Order id
          </Text>

          <Text color={'gray.600'} fontSize={'xs'}>
            #FUA{cartItems?._id}
          </Text>
        </Box>
        <VStack w={'full'}>
          <CartItemHeader />
          {cartItems?.cart?.map(lItem => (
            <CartItem
              key={lItem?._id}
              numItems={lItem?.number_of_products}
              itemName={lItem?.product?.name}
              price={lItem?.product?.price}
            />
          ))}

          <CartItemTotal totalPrice={cartItems?.total_price} />
        </VStack>

        <HStack w={'full'} justifyContent={'space-evenly'} py={'3'}>
          {confirming ? (
            <LoadingButton width={'140px'} />
          ) : (
            <CategoryButtonFilled
              borderRadius={'full'}
              isCurrent
              px={'6'}
              title={'Confirm'}
              handlePress={handleConfirmOrder}
            />
          )}

          {cancelling ? (
            <LoadingButton width={'140px'} />
          ) : (
            <CategoryButtonOutlined
              borderRadius={'full'}
              isCurrent={false}
              borderColor={'danger.500'}
              _text={{
                color: 'danger.600',
              }}
              px={'6'}
              title={'Cancel'}
              handlePress={handleCancelOrder}
            />
          )}
        </HStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ConfirmPaymentModal;

const CartItem = ({numItems, itemName, price}) => (
  <HStack w={'full'} p={'1.5'} justifyContent={'space-between'}>
    <Text color={'gray.500'} fontWeight={'medium'}>
      {numItems} x {itemName}(s)
    </Text>
    <Text color={'gray.500'}>{price}</Text>
  </HStack>
);

const CartItemTotal = ({totalPrice}) => (
  <HStack
    w={'full'}
    p={'1.5'}
    justifyContent={'space-between'}
    borderColor={'gray.400'}
    borderTopWidth={'1'}
    borderBottomWidth={'1'}>
    <Text fontSize={'md'} color={'gray.800'} fontWeight={'medium'}>
      TOTAL:
    </Text>
    <Text fontSize={'md'} fontWeight={'semibold'} color={'gray.700'}>
      {totalPrice}
    </Text>
  </HStack>
);
const CartItemHeader = () => (
  <HStack w={'full'} p={'1.5'} justifyContent={'space-between'}>
    <Text color={'gray.800'} fontWeight={'bold'}>
      ITEM
    </Text>
    <Text fontWeight={'semibold'} color={'gray.700'}>
      PRICE(kshs)
    </Text>
  </HStack>
);
