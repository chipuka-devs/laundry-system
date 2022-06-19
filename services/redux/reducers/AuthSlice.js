import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AuthServices from '../../server/AuthService';

const initialState = {
  user: null,
  loading: false,
  isError: false,
  isSuccess: false,
  error: null,
};

// register user
export const registerUser = createAsyncThunk(
  'auth/register',
  async (details, thunkApi) => {
    try {
      return await AuthServices.register(details);
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.error?.message || e.message || e;

      return thunkApi.rejectWithValue(message);
    }
  },
);

// login user
export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginDetails, thunkApi) => {
    try {
      return await AuthServices.login(loginDetails);
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.error?.message || e.message || e;

      return thunkApi.rejectWithValue(message);
    }
  },
);

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthServices.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // update state to include new user
      state.user = action.payload?.user;
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
      .addCase(loginUser.pending(), state => {
        state.loading = true;
      })
      .addCase(loginUser.rejected(), (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(loginUser.fulfilled(), (state, action) => {
        state.loading = false;
        state.isError = false;
        state.error = null;
        state.isSuccess = true;
        state.user = action.payload;
      });
    // // register
    // .addCase(registerUser.pending(), state => {
    //   state.loading = true;
    // })
    // .addCase(registerUser.rejected(), (state, action) => {
    //   state.loading = false;
    //   state.isError = true;
    //   state.error = action.payload;
    //   state.user = null;
    // })
    // .addCase(registerUser.fulfilled(), (state, action) => {
    //   state.loading = false;
    //   state.isError = false;
    //   state.error = null;
    //   state.isSuccess = true;
    //   state.user = action.payload;
    // });
  },
});

export const {setUser, reset} = authSlice.actions;

export default authSlice.reducer;
