import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  bucket: [],
  loading: false,
  isError: false,
  isSuccess: false,
  error: null,
};

export const addToBucketStorage = createAsyncThunk(
  'bucket/add_to_bucket',
  async (bucket, thunkApi) => {
    AsyncStorage.setItem('bucket', JSON.stringify(bucket))
      .then(r => r)
      .catch(e => {
        const message =
          e?.response?.data?.error?.message ||
          e?.response?.data?.message ||
          e?.message ||
          e;

        console.log(e.response);

        return thunkApi.rejectWithValue(message);
      });
  },
);

export const bucketSlice = createSlice({
  name: 'bucket',
  initialState,
  reducers: {
    setBucket: (state, action) => {
      // update state to include new user
      state.bucket = action.payload;
    },

    addToBasket: (state, action) => {
      const itemExistsInBucket =
        state.bucket?.filter(item => item._id === action.payload?._id).length >
        0;

      if (itemExistsInBucket) {
        const currentItemPosition = state.bucket.findIndex(
          item => item._id === action.payload?._id,
        );
        const newItem = state.bucket[currentItemPosition];
        newItem.amount += 1;
      } else {
        state.bucket.push({...action.payload, amount: 1});
      }
    },

    removeFromBucket: (state, action) => {
      const currentItemPosition = state.bucket.findIndex(
        item => item._id === action.payload?._id,
      );
      const item = state.bucket[currentItemPosition];

      if (item.amount > 1) {
        const newItem = item;
        newItem.amount -= 1;
      } else {
        state.bucket = state.bucket.filter(i => i._id !== action.payload?._id);
      }
    },

    reset: state => {
      state.loading = false;
      state.isError = false;
      state.error = null;
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(addToBucketStorage.fulfilled(), (state, action) => {
      console.log(action.payload);
      state.bucket = action.payload;
    });

    // // register
  },
});

export const {setUser, setBucket, reset, addToBasket, removeFromBucket} =
  bucketSlice.actions;

export default bucketSlice.reducer;
