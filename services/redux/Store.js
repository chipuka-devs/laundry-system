import {configureStore} from '@reduxjs/toolkit';

// reducers
import authReducer from './reducers/AuthSlice';
import laundryReducer from './reducers/OrderSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    laundry: laundryReducer,
  },
});
