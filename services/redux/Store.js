import {configureStore} from '@reduxjs/toolkit';

// reducers
import authReducer from './reducers/AuthSlice';
import laundryReducer from './reducers/OrderSlice';
import bucketReducer from './reducers/BucketSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    laundry: laundryReducer,
    bucket: bucketReducer,
  },
});
