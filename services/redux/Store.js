import {configureStore} from '@reduxjs/toolkit';

// reducers
import authReducer from './reducers/AuthSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
