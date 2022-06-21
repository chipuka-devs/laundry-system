import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AuthServices from '../../server/AuthService';
import OrderServices from '../../server/OrderServices';

const initialState = {
  orders: [],
  order: null,
  loading: false,
  isError: false,
  isSuccess: false,
  error: null,
};

// fetch orders
export const fetchOrders = createAsyncThunk(
  'auth/fetch_orders',
  async (param, thunkApi) => {
    try {
      return await OrderServices.fetchOrders(param);
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.error?.message || e.message || e;
      console.log(e);
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      // update state to include new user
      state.order = action.payload?.order;
    },

    reset: state => {
      state.loading = false;
      state.isError = false;
      state.error = null;
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOrders.pending(), state => {
        state.loading = true;
      })
      .addCase(fetchOrders.rejected(), (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
        state.orders = [];
      })
      .addCase(fetchOrders.fulfilled(), (state, action) => {
        state.loading = false;
        state.isError = false;
        state.error = null;
        state.isSuccess = true;
        state.orders = action.payload;
      });
    // // register
  },
});

export const {setUser, reset} = authSlice.actions;

export default authSlice.reducer;
